import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList } from 'react-native';

import { globals } from '../../helpers';

import BookmarkCell from './BookmarkCell';

class BookmarkList extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem({ item, index }) {
    return <BookmarkCell key={index} item={item} />;
  }

  _renderSectionHeader({ section }) {
    return (
      <View style={sectionStyles.view}>
        <Text style={sectionStyles.title}>{section.title}</Text>
      </View>
    );
  }

  _renderitemSeparator({ leadingItem, section }) {
    return <View style={sectionStyles.seperator} />;
  }

  render() {
    const { bookmarks } = this.props;

    return (
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        ItemSeparatorComponent={this._renderitemSeparator}
        sections={bookmarks}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const sectionStyles = {
  title: {
    fontWeight: 'bold',
  },
  view: {
    backgroundColor: globals.colors.lightGrey,
    paddingHorizontal: 16,
  },
  seperator: {
    backgroundColor: globals.colors.lightGrey,
    height: 1,
    marginLeft: 16,
  },
};

export default BookmarkList;
