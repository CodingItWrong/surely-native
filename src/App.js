import React, {useState} from 'react';
import {FlatList, Keyboard, SafeAreaView, StatusBar, View} from 'react-native';
import {Input, ListItem, ThemeProvider} from 'react-native-elements';
import AddButton from './AddButton';
import CompleteButton from './CompleteButton';
import DeleteButton from './DeleteButton';

const App: () => React$Node = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSave = () => {
    console.log({name});
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
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
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
            <ListItem
              bottomDivider
              title={item}
              rightElement={
                <View style={{flexDirection: 'row'}}>
                  <CompleteButton
                    testID={`Complete todo ${item} button`}
                    onPress={() => handleComplete(item)}
                  />
                  <DeleteButton
                    testID={`Delete todo ${item} button`}
                    onPress={() => handleDelete(item)}
                  />
                </View>
              }
            />
          )}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
