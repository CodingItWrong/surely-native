import React, {useState} from 'react';
import {FlatList, Keyboard, SafeAreaView, StatusBar, View} from 'react-native';
import {
  Button,
  Icon,
  Input,
  ListItem,
  ThemeProvider,
} from 'react-native-elements';

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
          <Button
            testID="Save Todo button"
            onPress={handleSave}
            icon={<Icon type="antdesign" name="plus" size={15} color="white" />}
          />
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
                  <Button
                    testID={`Complete todo ${item} button`}
                    buttonStyle={{backgroundColor: 'green'}}
                    onPress={() => handleComplete(item)}
                    icon={
                      <Icon
                        type="antdesign"
                        name="check"
                        size={15}
                        color="white"
                      />
                    }
                  />
                  <Button
                    testID={`Delete todo ${item} button`}
                    buttonStyle={{backgroundColor: 'red'}}
                    onPress={() => handleDelete(item)}
                    icon={
                      <Icon
                        type="antdesign"
                        name="close"
                        size={15}
                        color="white"
                      />
                    }
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
