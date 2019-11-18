import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

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
      <TodoList
        todos={todos}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </>
  );
};

export default TodoContainer;
