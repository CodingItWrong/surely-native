import React, {useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
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
          renderItem={({item}) => <ListItem title={item} bottomDivider />}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
