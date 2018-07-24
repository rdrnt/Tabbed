import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import NewBookmarkForm from '../components/Forms/NewBookmarkForm';

import { bookmarkActions } from '../actions';

import { globals } from '../helpers';

class NewBookmark extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    console.log('NewBookmark props', this.props);
  }

  componentDidMount() {
    /*
    localStorage.getAllBookmarkCategories(categories => {
      this.setState({
        categories,
      });
    });
    */
  }

  onSubmit(
    isValid,
    values,
    validationResults,
    postSubmit = null,
    modalNavigator = null
  ) {
    console.log('addBookmark onSubmit', isValid, values);

    const { dispatch } = this.props;

    if (isValid === true) {
      console.log('Adding new form with values', values);
      // Adding the bookmark
      dispatch(bookmarkActions.addBookmark(values));

      // go back to main screen
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NewBookmarkForm onSubmit={this.onSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: globals.colors.lighterGrey,
  },
});

export default connect()(NewBookmark);
