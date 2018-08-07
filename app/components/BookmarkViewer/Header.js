import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Transition } from 'react-navigation-fluid-transitions';

import { typography } from '../../styles';

import BookmarkAvatar from '../Bookmark/BookmarkAvatar';

const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  info: {
    marginBottom: 20,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    ...StyleSheet.flatten(typography.title1),
    color: 'white',
  },
});

const BookmarkViewerHeader = ({ item }) => (
  <View style={headerStyles.container}>
    <View style={headerStyles.info}>
      <Transition shared="circle">
        <BookmarkAvatar url={item.imageUrl} size="50" />
      </Transition>
      <Text style={headerStyles.title}>{item.title}</Text>
    </View>
  </View>
);

BookmarkViewerHeader.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default BookmarkViewerHeader;
