import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

class MainView extends Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View>
        <Text>Päänäkymä</Text>
        <Button
          title="Sign out"
          onPress={this._signOutAsync}
        />
      </View>
    );
  }
}

export default MainView;
