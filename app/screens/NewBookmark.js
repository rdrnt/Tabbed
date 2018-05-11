import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewBookmark extends Component {
  constructor(props) {
    super(props);
  }

  onNavigatorEvent(event) {}

  render() {
    return (
      <View>
        <Text>New mark</Text>
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
