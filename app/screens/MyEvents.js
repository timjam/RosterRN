import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import connectAlert from './../components/Alert/connectAlert';
import Container from './../components/Container';
import FloatingButton from '../components/FloatingButton';

class MyEvents extends React.Component {

  createEvent = () => {
    return this.props.alertWithType('info', 'Note', 'Event creation not implemented yet!');
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container scroll>
          <Text>My Events view</Text>
          <Text>My Events view</Text>
          <Text>My Events view</Text>
          <Text>My Events view</Text>
          <Text>My Events view</Text>
          <Text>My Events view</Text>
        </Container>
        <FloatingButton
          iconName="plus"
          onPress={this.createEvent}
        />
      </View>
    );
  }
}

MyEvents.propTypes = {
  alertWithType: PropTypes.func,
};

export default connectAlert(MyEvents);
