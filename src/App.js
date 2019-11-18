import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import TodoContainer from './TodoContainer';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TodoContainer />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
