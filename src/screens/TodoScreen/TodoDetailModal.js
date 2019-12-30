import React from 'react';
import {Button, Text} from 'react-native';
import {Modal} from 'react-native-paper';

const TodoDetailModal = ({todo, onDismiss, onDelete}) => {
  return (
    <Modal
      visible={todo !== null}
      onDismiss={onDismiss}
      contentContainerStyle={{backgroundColor: 'white'}}>
      <Text>{todo && todo.name}</Text>
      <Button
        testID="Delete todo button"
        title="Delete"
        onPress={() => onDelete(todo)}
      />
    </Modal>
  );
};

export default TodoDetailModal;
