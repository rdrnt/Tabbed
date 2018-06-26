import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globals } from '../helpers';

import AddBookmarkForm from '../components/Forms/AddBookmarkForm';

import { bookmarkActions } from '../actions';

import { localStorage } from '../helpers';

class NewBookmark extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    console.log('NewBookmark props', this.props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    localStorage.getAllBookmarkCategories(categories => {
      this.setState({
        categories,
      });
    });
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
      // dispatch(bookmarkActions.addBookmark(values));

      // go back to main screen
      this.props.navigator.popToRoot();
    }
  }

  render() {
    const { categories } = this.state;

    return (
      <View style={styles.container}>
        <AddBookmarkForm onSubmit={this.onSubmit} categories={categories} />
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
