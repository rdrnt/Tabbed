import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import SvgUri from 'react-native-svg-uri';

import { bookmarkUtils } from '../../helpers';

const BookmarkAvatar = ({ url, size }) =>
  bookmarkUtils.isImageSvg(url) ? (
    <SvgUri width="50" height="50" source={{ uri: url }} />
  ) : (
    <Image source={{ uri: url }} style={{ width: 50, height: 50 }} />
  );

BookmarkAvatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.string,
};

BookmarkAvatar.defaultProps = {
  size: '50',
};

export default BookmarkAvatar;
