import React from 'react';
import {Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const LoginForm = ({username, password, error, handleChange, handleLogIn}) => (
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

export default LoginForm;
