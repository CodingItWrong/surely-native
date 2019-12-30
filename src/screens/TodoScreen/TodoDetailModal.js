import React from 'react';
import {Button, Modal, Text} from 'react-native';

const TodoDetailModal = ({todo, onDismiss, onDelete}) => {
  return (
    <Modal visible={todo !== null}>
      <Text>{todo && todo.name}</Text>
      <Button
        testID="Delete todo button"
        title="Delete"
        onPress={() => onDelete(todo)}
      />
      <Button title="Close" onPress={onDismiss} />
    </Modal>
  );
};

export default TodoDetailModal;
