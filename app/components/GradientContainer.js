import React from 'react';
import { StyleSheet, ScrollView, StatusBar, View } from 'react-native';
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

class GradientContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: {
        y: 0,
      },
    };
  }

  render() {
    const { scrollEnabled, children } = this.props;
    return (
      <LinearGradient
        colors={colors.gradients.background}
        style={containerStyles.container}
      >
        {/* Light status bar */}
        <StatusBar barStyle="light-content" />
        {/* Use this view so we can act like the header isnt actually transparent
        The issue is, since if it's transparent the position is set to 'absolute'
        which makes our content go underneath and mess with the layout */}
        <View style={{ height: 89 }} />
        {/* We have to do getHeaderInset for the transulect Navigation bar */}
        {scrollEnabled ? (
          <ScrollView
            scrollEventThrottle={16}
            onScroll={value => console.log(value)}
          >
            {this.props.children}
          </ScrollView>
        ) : (
          children
        )}
      </LinearGradient>
    );
  }
}

/*
  children: should be react elements
  scrollEnabled: if the view needs to have a ScrollView or not
*/

GradientContainer.propTypes = {
  children: PropTypes.oneOf(PropTypes.element),
  scrollEnabled: PropTypes.bool,
};

GradientContainer.defaultProps = {
  children: null,
  scrollEnabled: true,
};

export default GradientContainer;
