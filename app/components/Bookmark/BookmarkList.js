import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { globals } from '../../helpers';

import BookmarkCell from './BookmarkCell';

const sectionStyles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  view: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  seperator: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    height: 1,
    marginLeft: 16,
  },
  noItems: {
    height: '100%',
    backgroundColor: globals.colors.lighterGrey,
    flex: 1,
  },
});

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    this.onCellPress = this.onCellPress.bind(this);
    this.renderItem = this.renderItem.bind(this);

    console.log(this.props);
  }

  onCellPress(item) {
    this.props.navigation.navigate('BookmarkViewer', {
      item,
    });
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

  renderItem({ item, index }) {
    return <BookmarkCell key={index} item={item} onPress={this.onCellPress} />;
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

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect()(BookmarkList);
