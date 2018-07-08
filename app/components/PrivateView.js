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
    biometrics.authenticate(isUnlocked => {
      this.setState({
        isUnlocked: isUnlocked,
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
