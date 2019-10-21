import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainView from './../screens/MainView';
import SignIn from './../screens/SignIn';
import Register from './../screens/Register';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';

const AppStack = createStackNavigator({ Home: MainView });
const AuthStack = createStackNavigator({ LogIn: SignIn, Registration: Register });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));

export default AppContainer;
