import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Auth from './Auth';
import AppBar from './AppBar';
import TodoContainer from './TodoContainer';
import theme from './theme';
import styles from './styles';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.fill}>
        <Auth
          render={({logOut}) => (
            <>
              <AppBar logOut={logOut} />
              <TodoContainer />
            </>
          )}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
