import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DropDownAlert from 'react-native-dropdownalert';

class AlertProvider extends Component {
  static childContextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  }

  static propTypes = {
    children: PropTypes.any,
  }

  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args),
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        <DropDownAlert
          ref={(ref) => { this.dropdown = ref; }}
        />
      </View>
    );
  }
}

export default AlertProvider;
