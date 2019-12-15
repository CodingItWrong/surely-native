import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider, Drawer} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Auth from './Auth';
import TodoScreen from './screens/TodoScreen';
import theme from './theme';
import styles from './styles';

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
              // logOut();
            }}
          />
        </>
      ),
    },
  );

  const AppContainer = createAppContainer(MyDrawerNavigator);
  return <AppContainer />;
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.fill}>
        <Auth render={({logOut}) => <DrawerNav logOut={logOut} />} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
