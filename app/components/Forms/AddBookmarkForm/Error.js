import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Text = styled.Text`
  font-size: 8px;
  color: red;
`;

const ErrorMessage = ({ hidden, message }) =>
  hidden ? null : <Text>{message}</Text>;

ErrorMessage.propTypes = {
  hidden: PropTypes.bool,
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  hidden: true,
  message: '',
};

export default ErrorMessage;
