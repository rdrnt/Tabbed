import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components';

import TextInput from './AddBookmarkForm/Input';
import SwitchInput from './AddBookmarkForm/Switch';
import SubmitButton from './AddBookmarkForm/Submit';
import ErrorMessage from './AddBookmarkForm/Error';

// The fields are
// Title
// URL
// isPrivate

const FormContainer = styled.View`
  padding: 10px;
`;

const NewBookmarkSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, 'Title must be greater than one character')
    .required('Required'),
  url: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .url('Not a valid URL.')
    .required('Required'),
});

const NewBookmarkForm = ({ onSubmit }) => (
  <Formik
    onSubmit={onSubmit}
    validationSchema={NewBookmarkSchema}
    initialValues={{
      title: '',
      url: '',
      private: false,
    }}
    render={({
      handleChange,
      values,
      errors,
      touched,
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
        {/*
        <ErrorMessage
          hidden={errors.title && touched.title}
          message={errors.title}
        />
        */}
        <TextInput
          name="url"
          onChangeText={handleChange('url')}
          value={values.url}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <ErrorMessage
          hidden={errors.url && !touched.url}
          message={errors.url}
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
