import React, { Component } from 'react';
import { Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { Card, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from './../components/Container';
import connectAlert from './../components/Alert/connectAlert';
import deviceStorage from './../services/deviceStorage';
import { LinkText } from './../components/Text/';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOrUsername: '',
      password: '',
      loading: false,
    };
  }

  signIn = () => {
    const { emailOrUsername, password, loading } = this.state;

    if (emailOrUsername.length === 0) {
      return this.props.alertWithType('error', 'Error', 'Email or username is required');
    }

    if (password.length === 0) {
      return this.props.alertWithType('error', 'Error', 'Password is required');
    }

    // TODO: Get the token from back end
    this.setState({ loading: !loading });
    // return this.props.alertWithType('warn', 'Warning', 'Sign in not implemented yet');
    deviceStorage.saveItem('userToken', 'jwttoken123');
    this.props.navigation.navigate('App');
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
            onChangeText={(emailOrUsername) => this.setState({ emailOrUsername })}
            value={this.state.emailOrUsername}
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
        </Card>
        <Text>No account yet?</Text>
        <LinkText>
        Sign Up instead!
        </LinkText>
      </Container>
    );
  }
}

SignIn.propTypes = {
  alertWithType: PropTypes.func,
};

export default connectAlert(SignIn);
