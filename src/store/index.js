import env from 'react-native-config';
import MemorySource from '@orbit/memory';
import JSONAPISource from '@orbit/jsonapi';
import Coordinator, {RequestStrategy, SyncStrategy} from '@orbit/coordinator';

import schema from './schema';

const memory = new MemorySource({schema});

console.log('REMOTE_DATA', env.REMOTE_DATA);
if (env.REMOTE_DATA === 'true') {
  const remote = new JSONAPISource({
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

  coordinator
    .activate()
    .then(() => {
      console.log('Coordinator is active');
    })
    .catch(console.error);
}

export default memory;
