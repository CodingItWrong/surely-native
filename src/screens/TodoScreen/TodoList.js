import {sortBy} from 'lodash';
import React from 'react';
import {FlatList} from 'react-native';
import TodoListItem from './TodoListItem';
import styles from '../../styles';

const sortByName = todos => sortBy(todos, [t => t.name.toLowerCase()]);

const TodoList = ({todos, onShowModal, onComplete}) => (
  <FlatList
    style={styles.fill}
    data={sortByName(todos)}
    keyExtractor={item => item._id}
    renderItem={({item}) => (
      <TodoListItem
        item={item}
        onShowModal={onShowModal}
        onComplete={onComplete}
      />
    )}
  />
);
export default TodoList;
