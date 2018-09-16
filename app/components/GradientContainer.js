import React from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../styles';
import { getHeaderInset } from '../helpers';

const containerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

const GradientContainer = ({ children }) => (
  <LinearGradient
    colors={colors.gradients.background}
    style={containerStyles.container}
  >
    {/* Light status bar */}
    <StatusBar barStyle="light-content" />
    {/* We have to do getHeaderInset for the transulect Navigation bar */}
    <ScrollView
      {...getHeaderInset()}
      scrollEventThrottle={16}
      onScroll={value => console.log(value.nativeEvent.contentOffset.y)}
    >
      {children}
    </ScrollView>
  </LinearGradient>
);

GradientContainer.propTypes = {
  children: PropTypes.oneOf(PropTypes.element),
};

GradientContainer.defaultProps = {
  children: null,
};

export default GradientContainer;
