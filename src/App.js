import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider, Portal} from 'react-native-paper';
import Auth from './Auth';
import DrawerNav from './DrawerNav';
import theme from './theme';
import styles from './styles';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Portal>
        <SafeAreaView style={styles.fill}>
          <Auth render={({logOut}) => <DrawerNav logOut={logOut} />} />
        </SafeAreaView>
      </Portal>
    </PaperProvider>
  );
};

export default App;
