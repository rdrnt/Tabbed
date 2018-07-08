import React from 'react';
import { View, Text } from 'react-native';

import { biometrics } from '../helpers';

import { VibrancyView } from 'react-native-blur';
import AppStateUpdate from './AppStateUpdate';

class PrivateView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUnlocked: false,
    };

    // this.handleAppStateChange = this.handleAppStateChange.bind(this);
    // this.authenticateBiometrics = this.authenticateBiometrics.bind(this);
  }

  componentDidMount() {
    // this.authenticateBiometrics();
  }

  /*
  authenticateBiometrics() {
    biometrics.authenticate(isUnlocked => {
      this.setState({
        isUnlocked: isUnlocked,
      });
    });
  }
  */

  /*
  handleAppStateChange(state) {
    console.log('bbbbbb', state);

    if (state === 'inactive') {
      this.setState({
        isUnlocked: false,
      });
    
  }
  */

  render() {
    return (
      <VibrancyView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        blurType="dark"
      >
        <Text>{this.state.isUnlocked ? 'Unlocked' : 'Locked'}</Text>
      </VibrancyView>
    );
  }
}

export default PrivateView;
