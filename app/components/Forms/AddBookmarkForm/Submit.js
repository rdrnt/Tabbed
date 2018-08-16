import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { colors } from '../../../styles';

const Button = styled.TouchableHighlight`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  align-self: center;
  border-radius: 25px;
  margin-top: 20px;
`;

const Text = styled.Text`
  color: ${colors.primaryColor};
`;

const SubmitButton = props => (
  <Button {...props}>
    <Text>{props.title}</Text>
  </Button>
);

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

SubmitButton.defaultProps = {
  disabled: false,
};

export default SubmitButton;
