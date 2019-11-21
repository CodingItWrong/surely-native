import React from 'react';
import {View} from 'react-native';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import QueryContainer from '../QueryContainer';
import styles from '../styles';

const TodoContainer = ({todos, updateStore}) => {
  const handleAdd = name =>
    updateStore(t =>
      t.addRecord({
        type: 'todos',
        attributes: {name},
      }),
    );

  const handleComplete = todoToComplete =>
    updateStore(t => t.removeRecord(todoToComplete));

  const handleDelete = todoToDelete =>
    updateStore(t => t.removeRecord(todoToDelete));

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
  return (
    <QueryContainer
      query={q => q.findRecords('todos')}
      render={({records, updateStore}) => (
        <TodoContainer todos={records} updateStore={updateStore} />
      )}
    />
  );
};

export default ConnectedTodoContainer;
