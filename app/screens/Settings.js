import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BookmarkList from '../components/Bookmark/BookmarkList';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    console.log('BookmarViewer props', props);
  }

  render() {
    return (
      <View>
        <Text>Penis</Text>
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
