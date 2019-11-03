import { React } from 'react';
import { PropTypes } from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

const LinkText = (props) => (
  <Text style={styles.linkText}>{props.children}</Text>
);

LinkText.propTypes = {
  children: PropTypes.string,
};

export default LinkText;
