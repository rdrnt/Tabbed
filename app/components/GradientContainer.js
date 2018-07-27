import React from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import LinearGradient from 'react-native-linear-gradient';

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
    colors={['#7889FF', '#D3E7FD']}
    style={containerStyles.container}
  >
    {/* Light status bar */}
    <StatusBar barStyle="light-content" />
    {/* We have to do getHeaderInset for the transulect Navigation bar */}
    <ScrollView style={{ flex: 1 }} {...getHeaderInset()}>
      {children}
    </ScrollView>
  </LinearGradient>
);

GradientContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GradientContainer;
