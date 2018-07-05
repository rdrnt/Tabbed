import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Settings panel</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
