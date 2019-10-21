import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import connectAlert from './../components/Alert/connectAlert';
import deviceStorage from './../services/deviceStorage';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      error: '',
    };
  }

  registerWithFacebook = () => {
    return this.props.alertWithType('error', 'Error', 'Facebook registration not implemented yet');
  }

  registerWithGoogle = () => {
    return this.props.alertWithType('error', 'Error', 'Google registration not implemented yet');
  }

  // Fix eslint/babel issue and transform this to async await
  registerUser = () => {
    const { email, password, confirmPassword } = this.state;

    if (email.length === 0) {
      return this.props.alertWithType('error', 'Error', 'Email is required');
    }

    if (password.length === 0 || password !== confirmPassword) {
      return this.props.alertWithType('error', 'Error', 'Password is required and must match password confirmation');
    }

    // Move validation to custom input out from this submit function
    const emailReg = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$', 'g');
    if (!emailReg.test(email)) {
      return this.props.alertWithType('error', 'Error', 'Email not valid');
    }

    this.setState({ error: '', loading: true });

    deviceStorage.saveItem('id_token', 'jwttoken123');
    // post(BASE_URL+/api/v1/signup, {
    //   user: {
    //     email,
    //     password,
    //     confirmPassword,
    //   },
    // }).then((response) => {
    //   // Handle jwt response here
    //   deviceStorage.saveItem('id_token', response.jwttoken);
    // }).catch((error) => {
    //   // Handle errors here
    //   // if (error === certainType)
    //   return this.props.alertWithType('error', 'Error', 'Registration failed. Please try again. If this keeps happening, please contact mofo@mofo.fu');
    // });
  }
}

Register.propTypes = {
  alertWithType: PropTypes.func,
};

export default connectAlert(Register);
