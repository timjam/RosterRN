import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './../screens/SignIn';
import Register from './../screens/Register';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';
import MainView from './../screens/MainView';
import MyEvents from './../screens/MyEvents';
import Discover from './../screens/Discover';

const AuthStack = createStackNavigator({
  LogIn: SignIn,
  SignUp: Register,
}, {
  headerMode: 'screen',
  initialRouteName: 'LogIn',
});

const MainStack = createBottomTabNavigator({
  MyEvents,
  Discover,
  Profile: MainView,
}, {
  headerMode: 'screen',
  initialRouteName: 'MyEvents',
});

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: MainStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));

export default AppContainer;
