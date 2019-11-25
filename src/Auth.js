import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import {Button, TextInput} from 'react-native-paper';
import {OAuth} from '@codingitwrong/react-login';
import styles from './styles';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

const Auth = ({children}) => (
  <OAuth
    initiallyLoggedIn={false}
    httpClient={httpClient}
    renderForm={renderForm}
    renderLoggedIn={({logOut}) => renderLoggedIn({children, logOut})}
    handleAccessToken={token => console.log({token})}
  />
);

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
      <Button mode="contained" onPress={handleLogIn}>
        Sign In
      </Button>
    </>
  );
};

const renderLoggedIn = ({children, logOut}) => (
  <View style={styles.fill}>
    {children}
    <Button onPress={logOut}>Sign Out</Button>
  </View>
);

export default Auth;
