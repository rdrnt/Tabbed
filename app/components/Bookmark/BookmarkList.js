import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { globals } from '../../helpers';

import BookmarkCell from './BookmarkCell';
import bookmarks from '../../reducers/bookmarks';

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

  _renderComponentIfNoItems() {
    return (
      <View style={sectionStyles.noItems}>
        <Text>No items available.</Text>
        <Text>Click here to add a new bookmark.</Text>
      </View>
    );
  }

  render() {
    const { bookmarks } = this.props;

    return (
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        ItemSeparatorComponent={this._renderitemSeparator}
        ListEmptyComponent={this._renderComponentIfNoItems}
        sections={bookmarks}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

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
  noItems: {
    height: '100%',
    backgroundColor: globals.colors.lighterGrey,
    flex: 1,
  },
};

export default connect()(BookmarkList);
