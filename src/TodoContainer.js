import React, {useState} from 'react';
import {FlatList, Keyboard, View} from 'react-native';
import {Input} from 'react-native-elements';
import AddButton from './AddButton';
import TodoListItem from './TodoListItem';

const TodoContainer = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSave = () => {
    setTodos([...todos, name]);
    setName('');
    Keyboard.dismiss();
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
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Input
            testID="New Todo Name field"
            placeholder="Add Todo"
            value={name}
            onChangeText={setName}
          />
        </View>
        <AddButton testID="Save Todo button" onPress={handleSave} />
      </View>
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
