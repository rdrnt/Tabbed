import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { colors, typography } from '../../styles';

const BookmarkViewerHeader = ({ url, image }) => {
  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={headerStyles.title}>{url}</Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighterGrey,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F5F3A4',
    alignSelf: 'center',
    marginVertical: 15,
  },
  title: {
    ...StyleSheet.flatten(typography.title1),
    marginBottom: 15,
  },
});

export default BookmarkViewerHeader;
