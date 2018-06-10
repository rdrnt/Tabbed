import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import globals from '../../helpers/globals';

class BookmarkCell extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableHighlight
        onPress={() => onPress(item, false)}
        onPressIn={() => onPress(item, true)}
      >
        <View style={cellStyles.cell}>
          <Image
            style={cellStyles.image}
            source={{
              uri:
                'https://img.itch.zone/aW1nLzcyNzgxNy5wbmc=/original/8AJNx%2B.png',
            }}
          />
          <Text style={cellStyles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const cellStyles = StyleSheet.create({
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 50,
    paddingHorizontal: 16,
  },
  title: {
    paddingLeft: 5,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: globals.colors.lightGrey,
    alignSelf: 'center',
  },
});

export default BookmarkCell;
