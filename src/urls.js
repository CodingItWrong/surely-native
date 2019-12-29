const urlsByEnvironment = {
  development: 'http://localhost:5984',
  // development: 'https://couchdb.codingitwrong.com',
  production: 'https://couchdb.codingitwrong.com',
};

const environment = __DEV__ ? 'development' : 'production';
export const couchUrl = urlsByEnvironment[environment];
