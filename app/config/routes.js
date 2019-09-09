import { createBottomTabNavigator } from 'react-navigation';

export const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {

    },
  },
});