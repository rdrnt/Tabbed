import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';

import styled from 'styled-components';

const Container = styled.View`
  padding: 5px;
  background-color: green;
`;

const Title = styled.Text`
  color: white;
`;

const SwitchInput = ({ disabled, onValueChange, value, name }) => (
  <Container>
    <Switch thumbTintColor="#FFFFFF" />
  </Container>
);

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

Switch.defaultProps = {
  disabled: false,
  value: true,
};

export default SwitchInput;
