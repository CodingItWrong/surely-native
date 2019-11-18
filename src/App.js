import React, {useState} from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';
import {Button, Input, ListItem, ThemeProvider} from 'react-native-elements';

const App: () => React$Node = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSave = () => {
    console.log({name});
    setTodos([...todos, name]);
    setName('');
  };

  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Input
          testID="New Todo Name field"
          value={name}
          onChangeText={setName}
        />
        <Button testID="Save Todo button" title="Save" onPress={handleSave} />
        <FlatList
          data={todos}
          keyExtractor={item => item}
          renderItem={({item}) => <ListItem title={item} bottomDivider />}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
