import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Modal} from 'react-native-paper';
import AppBar from '../../AppBar';
import useTodos from '../../useTodos';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import TodoDetailModal from './TodoDetailModal';
import styles from '../../styles';

const TodoScreen = ({navigation}) => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const {todos, handleAdd, handleComplete, handleDelete} = useTodos();

  const selectTodo = todo => setSelectedTodo(todo);
  const deselectTodo = () => setSelectedTodo(null);
  const deleteTodo = todo => {
    handleDelete(todo).then(deselectTodo);
  };

  return (
    <>
      <AppBar navigation={navigation} />
      <View style={styles.fill}>
        <NewTodoForm onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onSelect={selectTodo}
          onComplete={handleComplete}
        />
      </View>
      <TodoDetailModal
        todo={selectedTodo}
        onDismiss={deselectTodo}
        onDelete={deleteTodo}
      />
    </>
  );
};

export default TodoScreen;
