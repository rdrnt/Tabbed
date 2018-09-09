import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Text = styled.Text`
  font-size: 8px;
  color: red;
`;

const ErrorMessage = ({ hidden, value }) =>
  hidden ? <Text>{value}</Text> : null;

ErrorMessage.propTypes = {
  hidden: PropTypes.bool.isRequired,
  value: PropTypes.string,
};

ErrorMessage.defaultProps = {
  value: '',
};

export default ErrorMessage;
