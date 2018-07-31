import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { Transition } from 'react-navigation-fluid-transitions';

import { colors } from '../../styles';

// import BookmarkAvatar from './BookmarkAvatar';

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
        style={{ paddingBottom: 15 }}
      >
        <View style={cellStyles.cell}>
          <Transition shared="circle">
            <View style={cellStyles.imageBackground}>
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                style={cellStyles.image}
              />
            </View>
          </Transition>
          <View style={cellStyles.info}>
            <Text style={cellStyles.title}>{item.title}</Text>
            <Text
              style={cellStyles.subtitle}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {item.url}
            </Text>
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
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    alignSelf: 'center',
    paddingLeft: 10,
    height: 50,
  },
  title: {
    fontWeight: '600',
    fontSize: 17,
    color: 'black',
    lineHeight: 22,
    paddingTop: 3,
  },
  subtitle: {
    color: colors.flatDarkGrey,
    fontSize: 13,
    lineHeight: 20,
  },
  image: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    alignSelf: 'center',
  },
  imageBackground: {
    backgroundColor: colors.flatLightGrey,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default BookmarkCell;
