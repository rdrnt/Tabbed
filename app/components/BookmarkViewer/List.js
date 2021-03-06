import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { dateUtils } from '../../helpers';

const Cell = styled.View`
  height: 50px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${props => (props.showBottomBorder ? 0.5 : 0)};
  border-bottom-color: white;
  margin-left: 16px;
`;

const RightText = styled.Text`
  color: white;
  margin-right: 32px;
`;

const BookmarkViewerItem = ({ left, right, showBottomBorder }) => (
  <Cell showBottomBorder={showBottomBorder}>
    <Text style={{ color: 'white' }}>{left}</Text>
    <RightText>{right}</RightText>
  </Cell>
);

BookmarkViewerItem.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  showBottomBorder: PropTypes.bool,
};

BookmarkViewerItem.defaultProps = {
  showBottomBorder: true,
};

/* BookmarkViewerList stuff goes here */

const List = styled.View`
  border: 0.5px solid white;
  border-left-width: 0;
  border-right-width: 0;
  margin-top: 50px;
`;

const BookmarkViewerList = ({ item }) => (
  <List>
    <BookmarkViewerItem left="Private" right={item.isPrivate.toString()} />
    <BookmarkViewerItem
      left="Date Created"
      right={dateUtils.formatDate(item.dateCreated)}
      showBottomBorder={false}
    />
  </List>
);

BookmarkViewerList.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default BookmarkViewerList;
