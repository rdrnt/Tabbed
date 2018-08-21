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

  onSubmit(values, actions) {
    console.log('addBookmark onSubmit', values);

    const { dispatch, navigation } = this.props;
    actions.setSubmitting(false);
    // Adding the bookmark
    dispatch(bookmarkActions.addBookmark(values));

    // go back to main screen
    navigation.goBack();
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
