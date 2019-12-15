import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Auth from './Auth';
import TodoScreen from './screens/TodoScreen';
import theme from './theme';
import styles from './styles';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.fill}>
        <Auth render={({logOut}) => <TodoScreen logOut={logOut} />} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
