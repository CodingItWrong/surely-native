import React from 'react';
import {Button} from 'react-native-paper';

const AddButton = ({testID, onPress}) => (
  <Button testID={testID} onPress={onPress} icon="plus" mode="contained" />
);

export default AddButton;
