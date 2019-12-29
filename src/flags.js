import env from 'react-native-config';

export const persistLogin = env.PERSIST_LOGIN === 'true';
export const persistData = env.PERSIST_DATA === 'true';
console.log('persistLogin', persistLogin);
console.log('persistData', persistData);
