import React from 'react';
import {View} from 'react-native';
import AppBar from '../../AppBar';
import TodoContainer from '../../TodoContainer';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import styles from '../../styles';

const TodoScreen = ({navigation}) => (
  <>
    <AppBar navigation={navigation} />
    <TodoContainer
      render={({todos, handleAdd, handleComplete, handleDelete}) => {
        return (
          <View style={styles.fill}>
            <NewTodoForm onAdd={handleAdd} />
            <TodoList
              todos={todos}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          </View>
        );
      }}
    />
  </>
);

export default TodoScreen;
