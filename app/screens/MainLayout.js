import React, { Component } from 'react';
import MainView from './MainView';
import SignIn from './SignIn';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: '',
    };
  }

  render() {
    const jwt = this.state;
    if (!jwt) {
      return (
        <SignIn {...this.props} />
      );
    }
    return (
      <MainView {...this.props} />
    );
  }
}

export default MainLayout;
