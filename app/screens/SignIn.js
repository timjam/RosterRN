import React, { Component } from 'react';
import { Card, Input } from 'react-native-elements';
import Container from '../components/Container';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOrUsername: '',
      password: '',
      loading: false,
    };
  }
  render() {
    return (
      <Container scroll>
        <Card>
          <Input
            label="Email or Username"
          />
        </Card>
      </Container>
    );
  }
}

export default SignIn;
