import React from 'react';
import {Button} from 'react-native-paper';

const DeleteButton = ({style, testID, onPress}) => (
  <Button
    testID={testID}
    style={style}
    buttonStyle={styles.button}
    onPress={onPress}
    icon="close"
    mode="contained"
    color="red"
  />
);

const styles = {
  button: {
    backgroundColor: 'red',
  },
};

export default DeleteButton;
