import React from 'react';
import { View, Text } from 'react-native';

import { biometrics } from '../helpers';

class PrivateView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUnlocked: false,
    };
  }

  componentDidMount() {
    console.log('okaayyayay');
    biometrics.authenticate(success => {
      console.log('success', success);
      this.setState({
        isUnlocked: success,
      });
    });
  }

  render() {
    return (
      <View>
        <Text>{this.state.isUnlocked ? 'Unlocked' : 'Locked'}</Text>
      </View>
    );
  }
}

export default PrivateView;
