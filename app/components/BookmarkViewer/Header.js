import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { colors, typography } from '../../styles';

import BookmarkAvatar from '../Bookmark/BookmarkAvatar';

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    ...StyleSheet.flatten(typography.title1),
  },
});

const BookmarkViewerHeader = ({ item }) => (
  <View style={headerStyles.container}>
    <BookmarkAvatar title={item.title} size="75" />
    <Text style={headerStyles.title}>{item.url}</Text>
  </View>
);
export default BookmarkViewerHeader;
