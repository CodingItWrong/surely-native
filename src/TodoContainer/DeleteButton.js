import React from 'react';
import {Button, Icon} from 'react-native-elements';

const DeleteButton = ({style, testID, onPress}) => (
  <Button
    testID={testID}
    style={style}
    buttonStyle={styles.button}
    onPress={onPress}
    icon={<DeleteIcon />}
  />
);

const DeleteIcon = () => (
  <Icon type="antdesign" name="close" size={15} color="white" />
);

const styles = {
  button: {
    backgroundColor: 'red',
  },
};

export default DeleteButton;
