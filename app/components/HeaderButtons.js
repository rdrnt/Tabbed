import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderButtons, { HeaderButton } from 'react-navigation-header-buttons';

// https://github.com/vonovak/react-navigation-header-buttons#how-to-integrate-in-your-project

// define IconComponent, color, sizes and OverflowIcon in one place
const DefaultHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color="blue"
  />
);

export const DefaultHeaderButtons = props => (
  <HeaderButtons
    HeaderButtonComponent={DefaultHeaderButton}
    OverflowIcon={<Ionicons iconName="more-vert" size={23} color="white" />}
    {...props}
  />
);

export const Item = HeaderButtons.Item;
