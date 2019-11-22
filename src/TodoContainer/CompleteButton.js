import React from 'react';
import {Button} from 'react-native-paper';

const CompleteButton = ({style, testID, onPress}) => (
  <Button
    testID={testID}
    style={style}
    buttonStyle={styles.button}
    onPress={onPress}
    icon="check"
    mode="contained"
    color="green"
  />
);

const styles = {
  button: {
    backgroundColor: 'green',
  },
};

export default CompleteButton;
