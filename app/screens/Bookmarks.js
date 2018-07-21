import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import BookmarkList from '../components/Bookmark/BookmarkList';

import { bookmarkActions } from '../actions';

import { sorter } from '../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
});

// Home page AKA bookmark page
class Bookmarks extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  static getDerivedStateFromProps(nextProps, previousState) {
    // Sorting the bookmarks as they come in
    if (nextProps.bookmarks.list) {
      sorter.sortForSections(nextProps.bookmarks.list, marks => {
        previousState.bookmarks = marks;
      });
    }
    return previousState;
  }

  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [],
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(bookmarkActions.fetchBookmarks());
  }

  render() {
    const { bookmarks } = this.state;
    return (
      <View style={styles.container}>
        <BookmarkList
          bookmarks={bookmarks}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Bookmarks);
