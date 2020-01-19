import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import deviceStorage from './../services/deviceStorage';

class MainView extends Component {
  _signOutAsync = async () => {
    deviceStorage.clearStorage();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View>
        <Text>Main view. Just a placeholder screen</Text>
        <Button
          title="Sign out"
          onPress={this._signOutAsync}
        />
      </View>
    );
  }
}

export default MainView;
