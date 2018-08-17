import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';

import styled from 'styled-components';

import { stringUtils } from '../../../helpers';

const Container = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
`;

const SwitchInput = ({ onValueChange, value, name }) => (
  <Container>
    <Title>{stringUtils.capitalizeFirstLetter(name)}</Title>
    <Switch name={name} onValueChange={onValueChange} value={value} />
  </Container>
);

SwitchInput.propTypes = {
  name: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

SwitchInput.defaultProps = {
  value: false,
};

export default SwitchInput;
