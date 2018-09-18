import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GradientContainer from '../components/GradientContainer';

import BookmarkList from '../components/Bookmark/BookmarkList';
import BookmarkSearch from '../components/Bookmark/SearchBar';

import { bookmarkActions } from '../actions';

import { sorter, bookmarkUtils } from '../helpers';

// Home page AKA bookmark page
class Bookmarks extends Component {
  // For some reason we have to do this weird syntax
  // because if we don't add a return, we get linting and parsing issues

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Bookmarks',
      headerRight: [
        <Ionicons.Button
          backgroundColor="transparent"
          name="ios-add"
          color="white"
          onPress={() => navigation.navigate('NewBookmark')}
          key="add"
        />,
      ],
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
      search: {
        enabled: false,
        value: '',
      },
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(bookmarkActions.fetchBookmarks());
  }

  render() {
    const { bookmarks } = this.state;
    return (
      <GradientContainer scrollEnabled={false}>
        <BookmarkSearch onChangeText={value => console.log(value)} />
        <BookmarkList
          bookmarks={bookmarks}
          navigation={this.props.navigation}
        />
      </GradientContainer>
    );
  }
}

Bookmarks.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Bookmarks);
