import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';

import styled from 'styled-components';

const Container = styled.View`
  padding: 5px;
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
`;

const SwitchInput = ({ disabled, onValueChange, value, name }) => (
  <Container>
    <Title>{name}</Title>
    <Switch name={name} onValueChange={onValueChange} value={value} />
  </Container>
);

SwitchInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

SwitchInput.defaultProps = {
  disabled: false,
  value: true,
};

export default SwitchInput;
