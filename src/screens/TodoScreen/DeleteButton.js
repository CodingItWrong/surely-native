import React from 'react';
import {IconButton} from 'react-native-paper';
import styles from '../../styles';

const DeleteButton = ({style, testID, onPress}) => (
  <IconButton
    testID={testID}
    onPress={onPress}
    icon="trash-can-outline"
    size={24}
    style={{...styles.iconButton, ...style}}
    color="red"
  />
);

export default DeleteButton;
