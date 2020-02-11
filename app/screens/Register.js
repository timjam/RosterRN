/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Card, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import connectAlert from './../components/Alert/connectAlert';
import deviceStorage from './../services/deviceStorage';
import Container from '../components/Container';
import connection from './../config/connection';
import postJSONContent from './../services/connectionService';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
    };
  }

  // Fix eslint/babel issue and transform this to async await
  registerUser = async () => {
    const { email, password, confirmPassword } = this.state;

    if (email.length === 0) {
      return this.props.alertWithType('error', 'Error', 'Email is required');
    }

    if (password.length === 0 || password !== confirmPassword) {
      return this.props.alertWithType('error', 'Error', 'Password is required and must match password confirmation');
    }

    // Move validation to custom input out from this submit function
    // so that the input is validated while it is written
    const emailReg = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$', 'g');
    if (!emailReg.test(email)) {
      return this.props.alertWithType('error', 'Error', 'Email not valid');
    }

    try {
      const URL = `${connection.SERVER_URL}:4500/user/signup`;
      const response = await fetch(URL, postJSONContent({
        username: email,
        password,
      }));
      const data = await response.json();
      deviceStorage.saveItem('id_token', data.jwt);
      // Route back to sign-in screen for now. Later on succesful
      // registration sign user automatically in.
      this.props.navigation.navigate('LogIn');
    } catch (error) {
      console.log(error);
      return this.props.alertWithType('error', 'Error', `Something went wrong: ${error}`);
    }
  }
  render() {
    return (
      <Container scroll>
        <Card>
          <Input
            label="Email or Username"
            placeholder="Enter email or username"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            leftIcon={
              <Icon
                name="envelope"
                size={20}
              />
            }
          />
          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            leftIcon={
              <Icon
                name="lock"
                size={20}
              />
            }
          />
          <Input
            label="ConfirmPassword"
            placeholder="Repeat password"
            secureTextEntry
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
            leftIcon={
              <Icon
                name="lock"
                size={20}
              />
            }
          />
          <Button
            title="Sign Up"
            iconRight
            icon={
              <Icon
                name="arrow-right"
                size={20}
                color="white"
              />
            }
            onPress={this.registerUser}
            loading={this.state.loading}
          />
        </Card>
      </Container>
    );
  }
}

Register.propTypes = {
  alertWithType: PropTypes.func,
};

export default connectAlert(Register);
