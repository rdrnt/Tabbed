import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BookmarkList from '../components/Bookmark/BookmarkList';

export default class Home extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        id: 'add',
        systemItem: 'add',
        disableIconTint: true,
      },
    ],
  };

  onNavigatorEvent(event) {}

  render() {
    return (
      <View>
        <BookmarkList />
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
