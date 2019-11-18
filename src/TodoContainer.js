import React, {useState} from 'react';
import {FlatList} from 'react-native';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const handleComplete = todoToComplete => {
    const updatedTodos = todos.filter(todo => todo !== todoToComplete);
    setTodos(updatedTodos);
  };

  const handleDelete = todoToDelete => {
    const updatedTodos = todos.filter(todo => todo !== todoToDelete);
    setTodos(updatedTodos);
  };

  return (
    <>
      <NewTodoForm onAdd={handleAdd} />
      <FlatList
        data={todos}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TodoListItem
            item={item}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        )}
      />
    </>
  );
};

export default TodoContainer;
