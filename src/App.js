import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSave = () => {
    console.log({name});
    setTodos([...todos, name]);
    setName('');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput
          testID="New Todo Name field"
          value={name}
          onChangeText={setName}
        />
        <Button testID="Save Todo button" title="Save" onPress={handleSave} />
        {todos.map(todo => (
          <Text key={todo}>{todo}</Text>
        ))}
      </SafeAreaView>
    </>
  );
};

export default App;
