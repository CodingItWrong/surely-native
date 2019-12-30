import React from 'react';
import {Modal, SafeAreaView} from 'react-native';
import {Appbar, Button, Divider, List} from 'react-native-paper';

const TodoDetailModal = ({todo, onDismiss, onDelete}) => {
  return (
    <Modal visible={todo !== null}>
      <SafeAreaView>
        <Appbar>
          <Appbar.Content title="Edit Todo" />
          <Appbar.Action icon="close" onPress={onDismiss} />
        </Appbar>
        <List.Item title={todo && todo.name} titleNumberOfLines={3} />
        <Divider />
        <Button
          testID="Delete todo button"
          title="Delete"
          color="red"
          onPress={() => onDelete(todo)}>
          Delete
        </Button>
      </SafeAreaView>
    </Modal>
  );
};

export default TodoDetailModal;
