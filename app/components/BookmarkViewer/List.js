import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.View`
  height: 50px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${props => (props.showBottomBorder ? 0.5 : 0)};
  border-bottom-color: grey;
  margin-left: 10px;
`;

const BookmarkViewerItem = ({ left, right, showBottomBorder }) => (
  <Cell showBottomBorder={showBottomBorder}>
    <Text>{left}</Text>
    <Text style={{ marginRight: 20 }}>{right}</Text>
  </Cell>
);

const List = styled.View`
  border: 0.5px solid grey;
  margin-top: 50px;
`;

const BookmarkViewerList = ({ item }) => (
  <List>
    <BookmarkViewerItem left="Private" right={item.isPrivate.toString()} />
    <BookmarkViewerItem
      left="Date created"
      right={item.dateCreated.toString()}
      showBottomBorder={false}
    />
  </List>
);

BookmarkViewerItem.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  showBottomBorder: PropTypes.bool,
};

BookmarkViewerItem.defaultProps = {
  showBottomBorder: true,
};

export default BookmarkViewerList;
