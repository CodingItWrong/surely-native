module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['detox', 'jest'],
  env: {
    'detox/detox': true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    fail: true,
    jasmine: true,
  },
};
