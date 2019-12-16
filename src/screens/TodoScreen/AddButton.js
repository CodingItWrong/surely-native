import React from 'react';
import {IconButton} from 'react-native-paper';
import styles from '../../styles';

const AddButton = ({testID, onPress}) => (
  <IconButton
    testID={testID}
    onPress={onPress}
    icon="plus"
    size={24}
    style={styles.iconButton}
  />
);

export default AddButton;
