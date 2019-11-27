import env from 'react-native-config';
import MemorySource from '@orbit/memory';
import JSONAPISource from '@orbit/jsonapi';
import Coordinator, {
  RequestStrategy,
  SyncStrategy,
  EventLoggingStrategy,
} from '@orbit/coordinator';
import AsyncStorage from '@react-native-community/async-storage';

const persistLogin = env.PERSIST_LOGIN === 'true';
const tokenStorageKey = 'bible-reading:token';

import schema from './schema';

const memory = new MemorySource({schema});
let remote = {requestProcessor: {defaultFetchSettings: {headers: {}}}}; // so headers don't fail

console.log('REMOTE_DATA', env.REMOTE_DATA);
if (env.REMOTE_DATA === 'true') {
  remote = new JSONAPISource({
    schema,
    name: 'remote',
    host: 'http://localhost:3000',
  });

  const coordinator = new Coordinator({
    sources: [memory, remote],
  });

  // Query the remote server whenever the store is queried
  coordinator.addStrategy(
    new RequestStrategy({
      source: 'memory',
      on: 'beforeQuery',
      target: 'remote',
      action: 'query',
      blocking: true,
    }),
  );

  // Update the remote server whenever the store is updated
  coordinator.addStrategy(
    new RequestStrategy({
      source: 'memory',
      on: 'beforeUpdate',
      target: 'remote',
      action: 'update',
      blocking: false,
    }),
  );

  // Sync all changes received from the remote server to the store
  coordinator.addStrategy(
    new SyncStrategy({
      source: 'remote',
      target: 'memory',
      blocking: false,
    }),
  );

  // log events to console
  coordinator.addStrategy(new EventLoggingStrategy());

  coordinator
    .activate()
    .then(() => {
      console.log('Coordinator is active');
    })
    .catch(console.error);
}

export const loadToken = () => {
  if (!persistLogin) {
    return Promise.resolve(null);
  }

  return AsyncStorage.getItem(tokenStorageKey).then(token => {
    console.log({token});
    setAuthHeader(token);
    return token;
  });
};

export const setToken = token => {
  console.log('setToken', {token});
  setAuthHeader(token);

  if (!persistLogin) {
    return Promise.resolve();
  }

  return AsyncStorage.setItem(tokenStorageKey, token);
};

export const clearToken = () => {
  console.log('clearToken');
  setAuthHeader(null);

  if (!persistLogin) {
    return Promise.resolve();
  }

  return AsyncStorage.removeItem(tokenStorageKey);
};

const setAuthHeader = token => {
  if (token) {
    remote.requestProcessor.defaultFetchSettings.headers.Authorization = `Bearer ${token}`;
  } else {
    delete remote.requestProcessor.defaultFetchSettings.headers.Authorization;
  }
};

export default memory;
