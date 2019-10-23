import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MyEvents from './../screens/MyEvents';
import FindEvents from './../screens/FindEvents';
import Profile from './../screens/Profile';
import SignIn from './../screens/SignIn';
import Register from './../screens/Register';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';
import MainView from './../screens/MainView';

// const MyEventsStack = createStackNavigator({
//   MyEventsList: {},
//   MyEventsMap: {},
// }, {
//   headerMode: 'screen',
// });

// const FindEventsStack = createStackNavigator({
//   FindEventsList: {},
//   FindEventsMap: {},
// }, {
//   headerMode: 'screen',
// });

// const ProfileStack = createStackNavigator({
//   Profile: {},
//   Settings: {},
// }, {
//   headerMode: 'screen',
// });

const AppStack = createBottomTabNavigator({
  MyEvents: {
    screen: MyEvents,
    navigationOptions: {
      tabBarLabel: 'My Events',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="event"
          color={tintColor}
          size={28}
        />
      ),
    },
  },
  FindEvents: {
    screen: MainView,
    navigationOptions: {
      tabBarLabel: 'Find Events',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="search"
          color={tintColor}
          size={28}
        />
      ),
    },
  },
  Profile: {
    screen: MainView,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="person"
          color={tintColor}
          size={28}
        />
      ),
    },
  },
}, {
  initialRouteName: 'MyEvents',
});

const AuthStack = createStackNavigator({
  LogIn: SignIn,
  Registration: Register,
}, {
  headerMode: 'screen',
});

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
