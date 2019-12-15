import React from 'react';
import AppBar from '../../AppBar';
import TodoContainer from '../../TodoContainer';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

const TodoScreen = ({navigation}) => (
  <>
    <AppBar navigation={navigation} />
    <TodoContainer
      render={({todos, handleAdd, handleComplete, handleDelete}) => {
        return (
          <>
            <NewTodoForm onAdd={handleAdd} />
            <TodoList
              todos={todos}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          </>
        );
      }}
    />
  </>
);

export default TodoScreen;
