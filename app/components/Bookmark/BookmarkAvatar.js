import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar from 'react-native-user-avatar';

const BookmarkAvatar = ({ title, size }) => (
  <UserAvatar name={title} size={size} color="#8b909b" />
);

BookmarkAvatar.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
};

BookmarkAvatar.defaultProps = {
  size: 50,
};

export default BookmarkAvatar;
