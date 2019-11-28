import React from 'react';
import {IconButton} from 'react-native-paper';

const DeleteButton = ({style, testID, onPress}) => (
  <IconButton
    testID={testID}
    style={style}
    onPress={onPress}
    icon="trash-can-outline"
    size={20}
    color="red"
  />
);

export default DeleteButton;
