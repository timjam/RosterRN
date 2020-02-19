import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles, { buttonColor } from './styles';

const FloatingButton = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        raised
        reverse
        name={props.iconName || 'map'}
        type="font-awesome"
        color={buttonColor}
        onPress={props.onPress}
      />
    </View>
  );
};

FloatingButton.propTypes = {
  iconName: PropTypes.string,
  onPress: PropTypes.func,
};

export default FloatingButton;
