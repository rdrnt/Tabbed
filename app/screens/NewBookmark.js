import React, { Component } from 'react';
import { connect } from 'react-redux';

import GradientContainer from '../components/GradientContainer';

import NewBookmarkForm from '../components/Forms/NewBookmarkForm';

import { bookmarkActions } from '../actions';

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

    const { dispatch, navigation } = this.props;

    if (isValid === true) {
      console.log('Adding new form with values', values);
      // Adding the bookmark
      dispatch(bookmarkActions.addBookmark(values));

      // go back to main screen
      navigation.goBack();
    }
  }

  render() {
    return (
      <GradientContainer>
        <NewBookmarkForm onSubmit={this.onSubmit} />
      </GradientContainer>
    );
  }
}

export default connect()(NewBookmark);
