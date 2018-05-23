import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import BookmarkList from '../components/Bookmark/BookmarkList';

import { localStorage, sorter } from '../helpers';

// Home page AKA bookmark page
class Bookmarks extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    localStorage.getAllBookmarks(bookmarks => {
      sorter.sortForSections(bookmarks);
    });
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

function mapStateToProps(state, ownProps) {
  console.log('the state is', state, ownProps);
  return {
    courseData: state,
  };
}

export default connect(mapStateToProps)(Bookmarks);