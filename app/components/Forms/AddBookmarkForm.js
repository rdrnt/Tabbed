import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';

import { globals } from '../../helpers';

// The fields are
// Title
// URL
// categories
// isPrivate

class AddBookmarkForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GiftedForm
        formName="signupForm" // GiftedForm instances that use the same name will also share the same states
        clearOnClose={false} // delete the values of the form when unmounted
        defaults={
          {
            /*
          username: 'Farid',
          'gender{M}': true,
          password: 'abcdefg',
          country: 'FR',
          birthday: new Date(((new Date()).getFullYear() - 18)+''),
          */
          }
        }
        validators={{
          title: {
            title: 'Title',
            validate: [
              {
                validator: 'isLength',
                arguments: [1, 23],
                message:
                  '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters',
              },
            ],
          },
          username: {
            title: 'Username',
            validate: [
              {
                validator: 'isLength',
                arguments: [3, 16],
                message:
                  '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters',
              },
              {
                validator: 'matches',
                arguments: /^[a-zA-Z0-9]*$/,
                message: '{TITLE} can contains only alphanumeric characters',
              },
            ],
          },
          password: {
            title: 'Password',
            validate: [
              {
                validator: 'isLength',
                arguments: [6, 16],
                message:
                  '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters',
              },
            ],
          },
          emailAddress: {
            title: 'Email address',
            validate: [
              {
                validator: 'isLength',
                arguments: [6, 255],
              },
              {
                validator: 'isEmail',
              },
            ],
          },
        }}
      >
        <GiftedForm.SeparatorWidget />

        <GiftedForm.TextInputWidget
          name="title" // mandatory
          title="Title"
          placeholder="cool dog"
          clearButtonMode="while-editing"
        />

        <GiftedForm.SeparatorWidget />

        <GiftedForm.ErrorsWidget />

        <GiftedForm.SubmitWidget
          title="Sign up"
          onSubmit={(
            isValid,
            values,
            validationResults,
            postSubmit = null,
            modalNavigator = null
          ) => {
            if (isValid === true) {
              // prepare object
              /* Implement the request to your server using values variable
              ** then you can do:
              ** postSubmit(); // disable the loader
              ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
              ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
              ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
              */
            }
          }}
        />
      </GiftedForm>
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

AddBookmarkForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default connect()(AddBookmarkForm);
