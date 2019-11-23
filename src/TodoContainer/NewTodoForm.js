import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import AddButton from './AddButton';

const NewTodoForm = ({onAdd}) => {
  const [name, setName] = useState('');

  const handleSave = () => {
    onAdd(name);
    setName('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.formRow}>
      <View style={styles.inputContainer}>
        <TextInput
          testID="New Todo Name field"
          placeholder="Add Todo"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <AddButton testID="Save Todo button" onPress={handleSave} />
      </View>
    </View>
  );
};

const styles = {
  formRow: {
    flexDirection: 'row',
    paddingLeft: 4,
    paddingRight: 14,
  },
  inputContainer: {
    flex: 1,
  },
};

export default NewTodoForm;
