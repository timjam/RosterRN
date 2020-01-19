import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

const LinkText = (props) => (
  <Text
    style={styles.linkText}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

LinkText.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
};

export default LinkText;
