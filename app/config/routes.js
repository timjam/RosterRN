import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './../screens/SignIn';
import Register from './../screens/Register';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';
import MainView from './../screens/MainView';

const AuthStack = createStackNavigator({
  LogIn: SignIn,
  SignUp: Register,
}, {
  headerMode: 'screen',
});

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainView,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));

export default AppContainer;
