import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

const Icons = {
  delete: 'trash',
  browser: 'globe',
  edit: 'edit',
};

const Container = styled.View`
  background-color: white;
  height: 25px;
  width: 25px;
  border-radius: ${25 / 2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  height: 15px;
  width: 15px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderButton = ({}) => (
  <Container>
    <Button onPress={() => console.log('okkk')}>
      <Icon name="globe" color="#900" size={15} />
    </Button>
  </Container>
);

export default HeaderButton;
