const urlsByEnvironment = {
  development: 'http://localhost:3000',
  production: 'https://api.surely.codingitwrong.com',
};

const environment = __DEV__ ? 'development' : 'production';
export const baseURL = urlsByEnvironment[environment];
