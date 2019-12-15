import React from 'react';
import {Appbar} from 'react-native-paper';

const MyAppBar = ({navigation, refresh}) => (
  <Appbar>
    <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
    <Appbar.Content title="Surely" />
    <Appbar.Action icon="reload" onPress={refresh} />
  </Appbar>
);

export default MyAppBar;
