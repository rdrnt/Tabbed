import React from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import styled from 'styled-components';

import Input from './AddBookmarkForm/Input';
import SwitchInput from './AddBookmarkForm/Switch';

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
    render={formikProps => (
      <FormContainer>
        <Input
          name="name"
          onChangeText={formikProps.handleChange('name')}
          value={formikProps.values.name}
        />
        <Input
          name="url"
          onChangeText={formikProps.handleChange('url')}
          value={formikProps.values.url}
        />
        <SwitchInput
          name="private"
          onValueChange={formikProps.handleChange('private')}
        />
        <Button title="submit" onPress={formikProps.submitForm} />
      </FormContainer>
    )}
  />
);

NewBookmarkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookmarkForm;
