import React from 'react';
import {Divider, List} from 'react-native-paper';
import CompleteButton from './CompleteButton';

const TodoListItem = ({item, onShowModal, onComplete}) => {
  const {name} = item;
  return (
    <>
      <List.Item
        testID={`Todo ${name}`}
        title={name}
        titleNumberOfLines={3}
        onPress={() => onShowModal(item)}
        right={() => (
          <CompleteButton
            testID={`Complete todo ${name} button`}
            onPress={() => onComplete(item)}
          />
        )}
      />
      <Divider />
    </>
  );
};

export default TodoListItem;
