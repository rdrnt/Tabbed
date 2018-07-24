import React from 'react';
import PropTypes from 'prop-types';
import { GiftedForm } from 'react-native-gifted-form';

// The fields are
// Title
// URL
// isPrivate

// We use this to identify the form in GiftedFormManager
const BOOKMARK_FORM_NAME = 'newBookmarkForm';

const NewBookmarkForm = ({ onSubmit }) => (
  <GiftedForm
    formName={BOOKMARK_FORM_NAME} // GiftedForm instances that use the same name will also share the same states
    clearOnClose={false} // delete the values of the form when unmounted
    onValueChange={this.handleFormValueChange}
    defaults={{
      /*
          username: 'Farid',
          'gender{M}': true,
          password: 'abcdefg',
          country: 'FR',
          birthday: new Date(((new Date()).getFullYear() - 18)+''),
          */
      isPrivate: false,
    }}
    validators={{
      title: {
        title: 'Title',
        validate: [
          {
            validator: 'isLength',
            arguments: [1, 500],
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
            arguments: [3, 500],
            message: '{URL} must be between {ARGS[0]} and {ARGS[1]} characters',
          },
          {
            validator: (...args) => {
              // args [0] = the url
              const pattern = new RegExp(
                '^(https?:\\/\\/)?' +
                  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
                  '((\\d{1,3}\\.){3}\\d{1,3}))' +
                  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                  '(\\?[;&a-z\\d%_.~+=-]*)?' +
                  '(\\#[-a-z\\d_]*)?$',
                'i'
              );
              return pattern.test(args[0]);
            },
            message: '{TITLE} is not valid',
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
      placeholder="Pinterest Recipe For Cake"
      clearButtonMode="while-editing"
      autoCapitalize="words"
    />
    <GiftedForm.SeparatorWidget />
    {/* URL */}
    <GiftedForm.TextInputWidget
      name="url"
      title="URL"
      placeholder="https://google.ca"
      value="https://"
      clearButtonMode="while-editing"
    />
    <GiftedForm.SeparatorWidget />

    {/* isPrivate switch */}
    <GiftedForm.SwitchWidget name="isPrivate" title="Private" />

    <GiftedForm.SeparatorWidget />

    {/* Categories */}
    {/*
    <GiftedForm.GroupWidget title="Categories">
      <GiftedForm.SelectWidget
        name="categories"
        title="Categories"
        multiple={true}
      >
        {categories.map((category, index) => {
          console.log(category.toString(), index);
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
    */}

    <GiftedForm.ErrorsWidget />

    <GiftedForm.SubmitWidget title="Save" onSubmit={onSubmit} />
  </GiftedForm>
);

NewBookmarkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookmarkForm;
