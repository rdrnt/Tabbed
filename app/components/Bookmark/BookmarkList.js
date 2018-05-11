import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList } from 'react-native';

import globals from '../../helpers/globals';

import localStorage from '../../helpers/localStorage';

import BookmarkCell from './BookmarkCell';

const fakeSections = [
  {
    title: 'A',
    data: ['Animals', 'Ardvark'],
  },
  {
    title: 'B',
    data: ['Boats', 'Bots'],
  },
  {
    title: 'C',
    data: ['Crackers', 'Corn'],
  },
  {
    title: 'D',
    data: ['Denial'],
  },
  {
    title: 'E',
    data: ['Easypz', 'Easy'],
  },
  {
    title: 'F',
    data: ['Franlin', 'Forest'],
  },
  {
    title: 'G',
    data: ['Gator'],
  },
  {
    title: 'H',
    data: ['Hankering', 'Hallow'],
  },
];

class BookmarkList extends Component {
  constructor(props) {
    super(props);
    localStorage.saveItem();
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

  render() {
    return (
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        sections={fakeSections}
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
};

export default BookmarkList;
