/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { Card, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from './../components/Container';
import connectAlert from './../components/Alert/connectAlert';
import deviceStorage from './../services/deviceStorage';
import { LinkText } from './../components/Text';
import postJSONContent from './../services/connectionService';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loading: false,
    };
  }

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }
  signIn = async () => {
    const { username, password, loading } = this.state;

    if (username.length === 0) {
      return this.props.alertWithType('error', 'Error', 'Email or username is required');
    }

    if (password.length === 0) {
      return this.props.alertWithType('error', 'Error', 'Password is required');
    }

    // TODO: Get the token from back end
    this.setState({ loading: !loading });
    // return this.props.alertWithType('warn', 'Warning', 'Sign in not implemented yet');
    try {
      const URL = `${connection.SERVER_URL}:4500/user/signup`;
      const response = await fetch(URL, postJSONContent({
        username,
        password,
      }));
      const data = await response.json();
      deviceStorage.saveItem('userToken', data.jwt);
      this.props.navigation.navigate('App');
    } catch (error) {
      // TODO: Get errortype from server. Adjust error message accordingly
      return this.props.alertWithType('Error', 'errortype', 'Could not sign in');
    }
  }

  /*
    Style this correctly at some point!
    Style google and fb sign in buttons to comply to the design guides
    Icons are not aligned correctly. They should be aligned to left
    on the same line as the label and the input line
  */
  render() {
    return (
      <Container scroll>
        <Card>
          <Input
            label="Email or Username"
            placeholder="Enter email or username"
            keyboardType="email-address"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
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
          <Button
            title="Sign In"
            iconRight
            icon={
              <Icon
                name="arrow-right"
                size={20}
                color="white"
              />
            }
            onPress={this.signIn}
            loading={this.state.loading}
          />
          <Text>No account yet?</Text>
          <LinkText
            onPress={this.goToSignUp}
          >
          Sign Up instead!
          </LinkText>
        </Card>
      </Container>
    );
  }
}

SignIn.propTypes = {
  alertWithType: PropTypes.func,
};

export default connectAlert(SignIn);
