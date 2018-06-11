import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { globals } from '../../helpers';

import BookmarkCell from './BookmarkCell';

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    this.onCellPress = this.onCellPress.bind(this);
    this.renderItem = this.renderItem.bind(this);

    // This is where we'll store the refs to the bookmark cells
    this.previewRefs = [];
  }

  onCellPress(item, is3DTouch = false) {
    console.log(item);
    this.props.navigator.push({
      screen: 'tabbed.BookmarkViewer',
      title: item.title,
      previewView: is3DTouch ? this.previewRefs[item.title.toString()] : null,
      previewActions: [
        {
          title: 'Foo',
          style: 'selected', // none, selected, destructive
          actions: [{ title: 'Bar' }],
        },
      ],
      passProps: {
        item: JSON.parse(JSON.stringify(item)),
      },
    });
  }

  renderItem({ item, index }) {
    return (
      <BookmarkCell
        ref={ref => (this.previewRefs[item.title.toString()] = ref)}
        key={index}
        item={item}
        onPress={this.onCellPress}
      />
    );
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
        renderItem={this.renderItem}
        renderSectionHeader={this._renderSectionHeader}
        ItemSeparatorComponent={this._renderitemSeparator}
        ListEmptyComponent={this._renderComponentIfNoItems}
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
  noItems: {
    height: '100%',
    backgroundColor: globals.colors.lighterGrey,
    flex: 1,
  },
};

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape).isRequired,
  navigator: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect()(BookmarkList);
