import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import axios from 'axios';
import {Button, TextInput} from 'react-native-paper';
import env from 'react-native-config';
import {OAuth} from '@codingitwrong/react-login';
import {loadToken, setToken, clearToken} from './store';
import {baseURL} from './urls';

const remoteData = env.REMOTE_DATA === 'true';

let httpClient;
if (remoteData) {
  httpClient = axios.create({baseURL});
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

const Auth = ({render}) => {
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
      renderLoggedIn={({logOut}) => render({logOut: handleLogOut(logOut)})}
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

const handleLogOut = logOut => () =>
  clearToken()
    .then(logOut)
    .catch(console.error);

export default Auth;
