import React from 'react';
import {FlatList} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onComplete, onDelete}) => (
  <FlatList
    data={todos}
    keyExtractor={item => item}
    renderItem={({item}) => (
      <TodoListItem item={item} onComplete={onComplete} onDelete={onDelete} />
    )}
  />
);
export default TodoList;
