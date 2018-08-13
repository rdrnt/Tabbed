import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styled from 'styled-components';

const Container = styled.View`
  padding: 5px;
`;

const Title = styled.Text`
  color: white;
`;

const TextInput = styled.TextInput`
  height: 25px;
  color: white;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;

const Input = props => (
  <Container>
    <Title>{props.name.toUpperCase()}</Title>
    <TextInput
      onChangeText={props.onChangeText}
      name={props.name}
      value={props.value}
    />
  </Container>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default Input;
