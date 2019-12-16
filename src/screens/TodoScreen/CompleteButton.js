import React from 'react';
import {IconButton} from 'react-native-paper';
import styles from '../../styles';

const CompleteButton = ({style, testID, onPress}) => (
  <IconButton
    testID={testID}
    onPress={onPress}
    icon="check"
    size={24}
    style={{...styles.iconButton, ...style}}
    color="green"
  />
);

export default CompleteButton;
