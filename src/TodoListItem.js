import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';
import CompleteButton from './CompleteButton';
import DeleteButton from './DeleteButton';

const TodoListItem = ({item, onComplete, onDelete}) => (
  <ListItem
    bottomDivider
    title={item}
    rightElement={
      <View style={{flexDirection: 'row'}}>
        <CompleteButton
          testID={`Complete todo ${item} button`}
          onPress={() => onComplete(item)}
        />
        <DeleteButton
          testID={`Delete todo ${item} button`}
          onPress={() => onDelete(item)}
        />
      </View>
    }
  />
);

export default TodoListItem;
