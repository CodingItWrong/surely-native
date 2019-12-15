import React from 'react';
import AppBar from '../AppBar';
import TodoContainer from '../TodoContainer';

const TodoScreen = ({navigation}) => (
  <>
    <AppBar navigation={navigation} />
    <TodoContainer />
  </>
);

export default TodoScreen;
