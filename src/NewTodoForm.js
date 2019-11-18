import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import {Input} from 'react-native-elements';
import AddButton from './AddButton';

const NewTodoForm = ({onAdd}) => {
  const [name, setName] = useState('');

  const handleSave = () => {
    onAdd(name);
    setName('');
    Keyboard.dismiss();
  };

  return (
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
  );
};

export default NewTodoForm;
