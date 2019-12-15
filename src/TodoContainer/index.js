import React from 'react';
import {View} from 'react-native';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import useOrbitQuery from '../useOrbitQuery';
import styles from '../styles';
import store from '../store';

const TodoContainer = ({todos, render}) => {
  const handleAdd = name =>
    store.update(t =>
      t.addRecord({
        type: 'todo',
        attributes: {name},
      }),
    );

  const handleComplete = todoToComplete =>
    store.update(t => t.removeRecord(todoToComplete));

  const handleDelete = todoToDelete =>
    store.update(t => t.removeRecord(todoToDelete));

  return (
    <View style={styles.fill}>
      {render({todos, handleAdd, handleComplete, handleDelete})}
    </View>
  );
};

const query = q => q.findRecords('todo').sort('name');
const storeReady = () => Promise.resolve();

const ConnectedTodoContainer = ({render}) => {
  const records = useOrbitQuery({store, storeReady, query});

  return <TodoContainer todos={records} render={render} />;
};

export default ConnectedTodoContainer;
