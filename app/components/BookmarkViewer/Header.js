import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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
  },
  subtitle: {
    ...StyleSheet.flatten(typography.subhead),
  },
});

const BookmarkViewerHeader = ({ item }) => (
  <View style={headerStyles.container}>
    <View style={headerStyles.info}>
      <BookmarkAvatar title={item.title} size="75" />
      <Text style={headerStyles.title}>{item.title}</Text>
      <Text style={headerStyles.subtitle}>{item.url}</Text>
    </View>
  </View>
);

BookmarkViewerHeader.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default BookmarkViewerHeader;
