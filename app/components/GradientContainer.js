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
      statusBarEnabled: false,
      scroll: {
        y: 0,
      },
    };
  }

  render() {
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
        <ScrollView
          scrollEventThrottle={16}
          onScroll={value =>
            this.setState({ scroll: { y: value.nativeEvent.contentOffset.y } })
          }
        >
          {this.props.children}
        </ScrollView>
      </LinearGradient>
    );
  }
}

GradientContainer.propTypes = {
  children: PropTypes.oneOf(PropTypes.element),
};

GradientContainer.defaultProps = {
  children: null,
};

export default GradientContainer;
