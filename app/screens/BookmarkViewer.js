import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BookmarkViewerHeader from '../components/BookmarkViewer/Header';

export default class BookmarkViewer extends Component {
  constructor(props) {
    super(props);

    console.log('BookmarkViewer props', props);
  }
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <BookmarkViewerHeader
          url={item.url}
          image={'https://i.imgur.com/sdO8tAw.png'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
