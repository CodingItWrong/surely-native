import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import TodoContainer from './TodoContainer';
import styles from './styles';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.fill}>
        <TodoContainer />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
