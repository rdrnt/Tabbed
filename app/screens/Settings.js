import React, { Component } from 'react';
import { Text } from 'react-native';

import GradientContainer from '../components/GradientContainer';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GradientContainer>
        <Text>Settings panel</Text>
      </GradientContainer>
    );
  }
}

export default Settings;
