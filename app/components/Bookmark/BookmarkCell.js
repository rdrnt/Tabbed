import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import BookmarkAvatar from './BookmarkAvatar';

class BookmarkCell extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableHighlight
        onPress={() => onPress(item, false)}
        onLongPress={() => onPress(item, true)}
      >
        <View style={cellStyles.cell}>
          <View style={cellStyles.image}>
            <BookmarkAvatar title={item.title} />
          </View>
          <View style={cellStyles.info}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={cellStyles.title}>{item.title}</Text>
              {item.isPrivate && (
                <Image
                  style={cellStyles.isPrivate}
                  source={require('../../assets/images/eyewithline.png')}
                />
              )}
            </View>
            <Text>{item.url}</Text>
          </View>
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
    height: 75,
    paddingHorizontal: 16,
  },
  info: {
    flex: 1,
    padding: 5,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
    marginRight: 5,
  },
  isPrivate: {
    height: 10,
    width: 15,
    marginLeft: 5,
    alignSelf: 'center',
  },
});

export default BookmarkCell;
