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

// We use this to identify the form in GiftedFormManager
const BOOKMARK_FORM_NAME = 'addBookmarkForm';

class AddBookmarkForm extends Component {
  constructor(props) {
    super(props);

    console.log('bookie propss', props);
  }

  render() {
    return (
      <GiftedForm
        formName={BOOKMARK_FORM_NAME} // GiftedForm instances that use the same name will also share the same states
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
          url: {
            title: 'URL',
            validate: [
              {
                validator: 'isLength',
                arguments: [1, 23],
                message:
                  '{URL} must be between {ARGS[0]} and {ARGS[1]} characters',
              },
            ],
          },
        }}
      >
        <GiftedForm.SeparatorWidget />
        {/* Title */}
        <GiftedForm.TextInputWidget
          name="title"
          title="Title"
          placeholder="cool dog"
          clearButtonMode="while-editing"
        />
        <GiftedForm.SeparatorWidget />
        {/* URL */}
        <GiftedForm.TextInputWidget
          name="url"
          title="URL"
          placeholder="https://google.ca"
          clearButtonMode="while-editing"
        />
        <GiftedForm.SeparatorWidget />
        {/* isPrivate switch */}
        <GiftedForm.SwitchWidget name="isPrivate" title="Private" />
        <GiftedForm.SeparatorWidget />
        {/* Categories */}

        <GiftedForm.GroupWidget title="Categories">
          <GiftedForm.SelectWidget name="gender" title="Gender" multiple={true}>
            {this.props.categories.map((category, index) => {
              return (
                <GiftedForm.OptionWidget
                  title={category.toString()}
                  value={category.toString()}
                  key={index}
                />
              );
            })}
          </GiftedForm.SelectWidget>
        </GiftedForm.GroupWidget>

        <GiftedForm.ErrorsWidget />

        <GiftedForm.SubmitWidget title="Save" onSubmit={this.props.onSubmit} />
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
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect()(AddBookmarkForm);
