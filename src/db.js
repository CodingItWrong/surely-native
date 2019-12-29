import PouchDB from 'pouchdb-react-native';
import {persistData} from './flags';

let db = null;
let remoteDb = null;

const remoteHost = 'localhost:5984';

export const checkAuth = ({username, password}) => {
  if (!persistData) {
    return Promise.resolve();
  }

  const dbName = `surely-todos-${username}`;
  const tempDb = new PouchDB(`http://${remoteHost}/${dbName}`, {
    auth: {username, password},
  });

  return tempDb.allDocs().finally(() => tempDb.close());
};

export const connect = ({username, password}) => {
  const dbName = `surely-todos-${username}`;
  db = new PouchDB(dbName);
  if (persistData) {
    remoteDb = new PouchDB(`http://${remoteHost}/${dbName}`, {
      auth: {username, password},
    });
  } else {
    db.destroy();
    db = new PouchDB(dbName);
    remoteDb = null;
  }
};

export const disconnect = () => {
  db = null;
  remoteDb = null;
};

export const getDb = () => db;
export const getRemoteDb = () => remoteDb;
