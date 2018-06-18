import React from 'react';
import { View, Text } from 'react-native';

class PrivateView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUnlocked: false,
    };
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
