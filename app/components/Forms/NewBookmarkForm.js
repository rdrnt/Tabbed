import React from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import styled from 'styled-components';

import Input from './AddBookmarkForm/Input';

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
    render={props => (
      <FormContainer>
        <Input
          name="name"
          onChangeText={props.handleChange('name')}
          value={props.values.name}
        />
        <Button title="submit" onPress={props.submitForm} />
      </FormContainer>
    )}
  />
);

NewBookmarkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookmarkForm;
