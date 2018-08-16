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

const NewBookmarkForm = props => (
  <Formik
    onSubmit={(values, actions) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    }}
    render={({ handleChange, values, errors, submitForm, setFieldValue }) => (
      <FormContainer>
        <TextInput
          name="name"
          onChangeText={handleChange('name')}
          value={values.name}
        />
        <TextInput
          name="url"
          onChangeText={handleChange('url')}
          value={values.url}
        />
        <SwitchInput
          name="private"
          onValueChange={value => setFieldValue('private', value)}
          value={values.private}
        />
        <SubmitButton title="submit" onPress={submitForm} />
      </FormContainer>
    )}
  />
);

NewBookmarkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookmarkForm;
