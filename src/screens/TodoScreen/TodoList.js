import {sortBy} from 'lodash';
import React from 'react';
import {FlatList} from 'react-native';
import TodoListItem from './TodoListItem';
import styles from '../../styles';

const sortByName = todos => sortBy(todos, [t => t.name.toLowerCase()]);

const TodoList = ({todos, onComplete, onDelete}) => (
  <FlatList
    style={styles.fill}
    data={sortByName(todos)}
    keyExtractor={item => item._id}
    renderItem={({item}) => (
      <TodoListItem item={item} onComplete={onComplete} onDelete={onDelete} />
    )}
  />
);
export default TodoList;
