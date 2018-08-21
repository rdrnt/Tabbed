import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import styled from 'styled-components';

import TextInput from './AddBookmarkForm/Input';
import SwitchInput from './AddBookmarkForm/Switch';
import SubmitButton from './AddBookmarkForm/Submit';

// The fields are
// Title
// URL
// isPrivate

const FormContainer = styled.View`
  padding: 10px;
`;

const NewBookmarkForm = ({ onSubmit }) => (
  <Formik
    onSubmit={onSubmit}
    initialValues={{
      title: '',
      url: '',
      private: false,
    }}
    render={({
      handleChange,
      values,
      errors,
      submitForm,
      setFieldValue,
      isSubmitting,
    }) => (
      <FormContainer>
        <TextInput
          name="title"
          onChangeText={handleChange('title')}
          value={values.title}
        />
        <TextInput
          name="url"
          onChangeText={handleChange('url')}
          value={values.url}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SwitchInput
          name="private"
          onValueChange={value => setFieldValue('private', value)}
          value={values.private}
        />
        <SubmitButton
          title="submit"
          onPress={submitForm}
          disabled={isSubmitting}
        />
      </FormContainer>
    )}
  />
);

NewBookmarkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookmarkForm;
