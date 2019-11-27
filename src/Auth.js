import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import {Button, TextInput} from 'react-native-paper';
import env from 'react-native-config';
import {OAuth} from '@codingitwrong/react-login';
import styles from './styles';
import {loadToken, setToken, clearToken} from './store';

const remoteData = env.REMOTE_DATA;

let httpClient;
if (remoteData) {
  httpClient = axios.create({
    baseURL: 'http://localhost:3000',
  });
} else {
  httpClient = {
    post: () =>
      Promise.resolve({
        data: {
          access_token: 'fake_access_token',
        },
      }),
  };
}

const Auth = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [initiallyLoggedIn, setInitiallyLoggedIn] = useState(false);

  useEffect(() => {
    loadToken().then(token => {
      setInitiallyLoggedIn(!!token);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <OAuth
      initiallyLoggedIn={initiallyLoggedIn}
      httpClient={httpClient}
      renderForm={renderForm}
      renderLoggedIn={({logOut}) => renderLoggedIn({children, logOut})}
      handleAccessToken={setToken}
    />
  );
};

const renderForm = ({username, password, error, handleChange, handleLogIn}) => {
  return (
    <>
      {error && <Text>{error}</Text>}
      <TextInput
        placeholder="Email"
        testID="Email field"
        autoCapitalize="none"
        autoCompleteType="email"
        value={username}
        onChangeText={handleChange('username')}
      />
      <TextInput
        placeholder="Password"
        testID="Password field"
        value={password}
        onChangeText={handleChange('password')}
        secureTextEntry={true}
      />
      <Button testID="Sign In button" mode="contained" onPress={handleLogIn}>
        Sign In
      </Button>
    </>
  );
};

const renderLoggedIn = ({children, logOut}) => (
  <View style={styles.fill}>
    {children}
    <Button onPress={handleLogOut(logOut)}>Sign Out</Button>
  </View>
);

const handleLogOut = logOut => () =>
  clearToken()
    .then(logOut)
    .catch(console.error);

export default Auth;
