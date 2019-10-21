import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import styles from '../Container/styles';

// Might not need this component yet at all

class Input extends Component {
  render() {
    return (
      <View>
        <FormLabel>{this.props.label}</FormLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          inputStyle={styles.input}
          {...this.props}
        />
        <FormValidationMessage>{this.props.validationMessage}</FormValidationMessage>
      </View>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  validationMessage: PropTypes.string,
};

export default Input;
