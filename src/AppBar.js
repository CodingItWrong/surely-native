import React from 'react';
import {Appbar} from 'react-native-paper';

const MyAppBar = ({navigation}) => (
  <Appbar>
    <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
    <Appbar.Content title="Surely" />
  </Appbar>
);

export default MyAppBar;
