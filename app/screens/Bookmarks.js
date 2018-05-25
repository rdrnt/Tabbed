import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import BookmarkList from '../components/Bookmark/BookmarkList';

import { bookmarkActions } from '../actions';

import { localStorage, sorter } from '../helpers';

// Home page AKA bookmark page
class Bookmarks extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.state = {
      bookmarks: [],
    };

    console.log(this.props);
    this.props.dispatch(bookmarkActions.fetchBookmarks());
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

  componentDidMount() {
    localStorage.getAllBookmarks(bookmarks => {
      // sorter.sortForSections(bookmarks);
      sorter.sortForSections(bookmarks, sortedBookmarks => {
        this.setState({
          bookmarks: sortedBookmarks,
        });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <BookmarkList bookmarks={this.state.bookmarks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Bookmarks);
