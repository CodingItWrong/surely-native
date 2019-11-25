import React from 'react';
import {View} from 'react-native';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import {useOrbitQuery} from '../QueryContainer';
import styles from '../styles';
import store from '../store';

const TodoContainer = ({todos}) => {
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
      <NewTodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </View>
  );
};

const ConnectedTodoContainer = () => {
  const storeReady = () => Promise.resolve();
  const query = q => q.findRecords('todo');

  const records = useOrbitQuery({store, storeReady, query});

  return <TodoContainer todos={records} />;
};

export default ConnectedTodoContainer;
