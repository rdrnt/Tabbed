import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Item, DefaultHeaderButtons } from '../components/HeaderButtons';

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
  // For some reason we have to do this weird syntax
  // because if we don't add a return, we get linting and parsing issues
  static navigationOptions = ({ navigation }) => {
    /*
    return {
      title: 'Home',
      headerRight: (
        <Icon
          name="ios-add"
          size={44}
          color={colors.blueTint}
          onPress={() => navigation.navigate('NewBookmark')}
        />
      ),
    };
    */
    return {
      title: 'Bookmarks',
      headerRight: (
        <DefaultHeaderButtons>
          <Item
            iconName="ios-add"
            onPress={() => navigation.navigate('NewBookmark')}
          />
        </DefaultHeaderButtons>
      ),
    };
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
