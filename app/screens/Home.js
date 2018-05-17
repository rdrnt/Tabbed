import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BookmarkList from '../components/Bookmark/BookmarkList';

import { localStorage } from '../helpers';

// Home page AKA bookmark page
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'add',
        systemItem: 'add',
      },
    ],
  };

  onNavigatorEvent(event) {
    const { navigator } = this.props;

    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'add') {
        navigator.push({
          screen: 'tabbed.NewBookmark',
          title: 'New Bookmark',
          navigatorStyle: {
            largeTitle: false,
          },
        });
      }
    }
  }

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
