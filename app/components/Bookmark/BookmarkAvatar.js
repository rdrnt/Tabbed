import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar from 'react-native-user-avatar';

const BookmarkAvatar = ({ title, size }) => (
  <UserAvatar name={title} size={size} />
);

BookmarkAvatar.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
};

BookmarkAvatar.defaultProps = {
  size: 50,
};

export default BookmarkAvatar;
