import React from 'react';
import AppBar from '../AppBar';
import TodoContainer from '../TodoContainer';

const TodoScreen = ({logOut}) => (
  <>
    <AppBar logOut={logOut} />
    <TodoContainer />
  </>
);

export default TodoScreen;
