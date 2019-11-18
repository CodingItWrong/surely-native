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
      <View style={styles.buttonGroup}>
        <CompleteButton
          style={styles.button}
          testID={`Complete todo ${item} button`}
          onPress={() => onComplete(item)}
        />
        <DeleteButton
          style={styles.button}
          testID={`Delete todo ${item} button`}
          onPress={() => onDelete(item)}
        />
      </View>
    }
  />
);

const styles = {
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
  },
};

export default TodoListItem;
