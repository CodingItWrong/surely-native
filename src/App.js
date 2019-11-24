import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Auth from './Auth';
import TodoContainer from './TodoContainer';
import styles from './styles';

const App = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.fill}>
        <Auth>
          <TodoContainer />
        </Auth>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
