import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { stringUtils } from '../../../helpers';

const Container = styled.View`
  padding: 10px;
`;

const Title = styled.Text`
  color: white;
`;

const Input = styled.TextInput`
  height: 25px;
  color: white;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;

const TextInput = ({ name, onChangeText, value }) => (
  <Container>
    <Title>{stringUtils.capitalizeFirstLetter(name)}</Title>
    <Input onChangeText={onChangeText} name={name} value={value} />
  </Container>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  value: '',
};

export default TextInput;
