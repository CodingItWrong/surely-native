import React, {useState, useEffect} from 'react';
import {Auth} from '@codingitwrong/react-login';
import LoginForm from './LoginForm';
import {checkAuth} from '../db';
import {loadAuth, setAuth, clearAuth} from '../authStorage';

const attemptLogin = ({username, password}) => {
  return checkAuth({username, password})
    .then(() => {
      setAuth({username, password});
    })
    .catch(err => {
      console.log('auth error', err);
      throw err.reason;
    });
};

const MyAuth = ({render}) => {
  const [loading, setLoading] = useState(true);
  const [initiallyLoggedIn, setInitiallyLoggedIn] = useState(false);

  useEffect(() => {
    loadAuth().then(auth => {
      setInitiallyLoggedIn(!!auth);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Auth
      initiallyLoggedIn={initiallyLoggedIn}
      renderForm={props => <LoginForm {...props} />}
      attemptLogin={attemptLogin}
      renderLoggedIn={({logOut}) => render({logOut: handleLogOut(logOut)})}
    />
  );
};

const handleLogOut = logOut => () =>
  clearAuth()
    .then(logOut)
    .catch(console.error);

export default MyAuth;
