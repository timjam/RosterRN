import React from 'react';
import MainView from './MainView';
import SignIn from './SignIn';

const MainLayout = (props) => {
  // if (userIsLoggedIn) {
  if (false) {
    return <MainView {...props} />;
  }
  return <SignIn {...props} />;
};

export default MainLayout;
