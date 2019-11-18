import React from 'react';
import {Button, Icon} from 'react-native-elements';

const CompleteButton = ({style, testID, onPress}) => (
  <Button
    testID={testID}
    style={style}
    buttonStyle={styles.button}
    onPress={onPress}
    icon={<CompleteIcon />}
  />
);

const CompleteIcon = () => (
  <Icon type="antdesign" name="check" size={15} color="white" />
);

const styles = {
  button: {
    backgroundColor: 'green',
  },
};

export default CompleteButton;
