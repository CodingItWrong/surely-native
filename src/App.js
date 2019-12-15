import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider, Drawer} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Auth from './Auth';
import TodoScreen from './screens/TodoScreen';
import theme from './theme';
import styles from './styles';

const MyDrawerNavigator = createDrawerNavigator(
  {
    TodoScreen,
  },
  {
    contentComponent: () => (
      <>
        <Drawer.Item label="Log Out" />
      </>
    ),
  },
);

const MyApp = createAppContainer(MyDrawerNavigator);

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.fill}>
        <Auth render={({logOut}) => <MyApp />} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
