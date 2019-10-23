import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Container from '../components/Container';
import connectAlert from './../components/Alert/connectAlert';

class MyEvents extends Component {
  render() {
    return (
      <Container scroll>
        <List>
          <ListItem
            key="kii"
            title="kee"
            subtitle="kuu"
          />
          <ListItem
            key="kee"
            title="kii"
            subtitle="kuu"
          />
        </List>
      </Container>
    );
  }
}

export default connectAlert(MyEvents);
