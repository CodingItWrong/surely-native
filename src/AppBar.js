import React from 'react';
import {Appbar} from 'react-native-paper';

const MyAppBar = ({logOut}) => (
  <Appbar>
    <Appbar.Content title="Surely" />
    <Appbar.Action icon="logout" onPress={logOut} />
  </Appbar>
);

export default MyAppBar;
