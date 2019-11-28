import React from 'react';
import {IconButton} from 'react-native-paper';

const AddButton = ({testID, onPress}) => (
  <IconButton testID={testID} onPress={onPress} icon="plus" size={20} />
);

export default AddButton;
