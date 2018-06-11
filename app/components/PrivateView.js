import React from 'react';
import { View, Text } from 'react-native';
import TouchID from 'react-native-touch-id';
// import { biometrics } from '../helpers';

class PrivateView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUnlocked: false,
    };
  }

  componentDidMount() {
    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });
    /*
    biometrics.authenticate(success => {
      console.log('success', success);
      this.setState({
        isUnlocked: success,
      });
    });
    */
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
