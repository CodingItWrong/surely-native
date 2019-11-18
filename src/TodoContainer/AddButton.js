import React from 'react';
import {Button, Icon} from 'react-native-elements';

const AddButton = ({testID, onPress}) => (
  <Button testID={testID} onPress={onPress} icon={<AddIcon />} />
);

const AddIcon = () => (
  <Icon type="antdesign" name="plus" size={15} color="white" />
);

export default AddButton;
