import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '../../styles';

// think of this as an enum
// export it so we can refer to the icons as a prop
export const Icons = {
  delete: 'trash',
  browser: 'globe',
  edit: 'edit',
};

const Container = styled.View`
  background-color: white;
  height: 35px;
  width: 35px;
  border-radius: ${35 / 2};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;

const Button = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderButton = ({ iconName }) => (
  <Container>
    <Button onPress={() => console.log('okkk')}>
      <Icon name={iconName} color={colors.flatDarkGrey} size={15} />
    </Button>
  </Container>
);

HeaderButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default HeaderButton;
