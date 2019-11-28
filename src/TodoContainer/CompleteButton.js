import React from 'react';
import {IconButton} from 'react-native-paper';

const CompleteButton = ({style, testID, onPress}) => (
  <IconButton
    testID={testID}
    style={style}
    onPress={onPress}
    icon="check"
    size={20}
    color="green"
  />
);

export default CompleteButton;
