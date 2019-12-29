import AsyncStorage from '@react-native-community/async-storage';
import {connect, disconnect} from './db';
import {persistLogin} from './flags';

const authStorageKey = 'surely:auth';

export const loadAuth = async () => {
  let auth = null;

  if (persistLogin) {
    const authString = await AsyncStorage.getItem(authStorageKey);
    if (authString) {
      const [username, password] = authString.split(':');
      auth = {username, password};
      connect(auth);
    }
  }

  return auth;
};

export const setAuth = async ({username, password}) => {
  connect({username, password});

  if (persistLogin) {
    const authString = [username, password].join(':');
    await AsyncStorage.setItem(authStorageKey, authString);
  }
};

export const clearAuth = async () => {
  disconnect();

  if (persistLogin) {
    await AsyncStorage.removeItem(authStorageKey);
  }
};
