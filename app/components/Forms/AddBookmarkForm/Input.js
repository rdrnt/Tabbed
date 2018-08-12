import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components';

const TextInput = styled.TextInput`
  background-color: white;
`;

const Input = props => (
  <TextInput
    onChangeText={props.onChangeText}
    name={props.name}
    value={props.value}
  />
);

export default Input;
