import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BookmarkViewer extends Component {
  constructor(props) {
    super(props);

    console.log('BookmarkViewer props', props);

    this.state = {
      isPreview: props.isPreview,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.isPreview ? 'Preview' : 'Not a preview'} </Text>
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
