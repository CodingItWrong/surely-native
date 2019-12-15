import React from 'react';
import {Drawer} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import TodoScreen from './screens/TodoScreen';

const DrawerNav = ({logOut}) => {
  const MyDrawerNavigator = createDrawerNavigator(
    {
      TodoScreen,
    },
    {
      contentComponent: () => (
        <>
          <Drawer.Item
            label="Log Out"
            onPress={() => {
              console.log('logging out', logOut);
              logOut();
            }}
          />
        </>
      ),
    },
  );

  const AppContainer = createAppContainer(MyDrawerNavigator);
  return <AppContainer />;
};

export default DrawerNav;
