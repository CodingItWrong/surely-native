import React from 'react';
import {View} from 'react-native';
import AppBar from '../../AppBar';
import useTodos from '../../useTodos';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import styles from '../../styles';

const TodoScreen = ({navigation}) => {
  const {todos, handleAdd, handleComplete, handleDelete} = useTodos();

  return (
    <>
      <AppBar navigation={navigation} />
      <View style={styles.fill}>
        <NewTodoForm onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </View>
    </>
  );
};

export default TodoScreen;
