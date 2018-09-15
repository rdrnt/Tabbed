import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../styles';

import BookmarkImage from './BookmarkImage';

const TouchContainer = styled.TouchableHighlight`
  padding: 15px 0px;
`;

const Cell = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  margin: 0 16px;
  background-color: white;
  border-radius: 8;
`;

const Info = styled.View`
  align-self: center;
  padding-left: 10px;
  height: 50px;
  flex: 1;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  padding-top: 3px;
`;

const Url = styled.Text`
  color: ${colors.flatDarkGrey};
  font-size: 13px;
  line-height: 20px;
  flex-wrap: wrap;
`;

const BookmarkCell = ({ item, onPress }) => (
  <TouchContainer
    onPress={() => onPress(item, false)}
    onLongPress={() => onPress(item, true)}
  >
    <Cell>
      <BookmarkImage
        url={item.imageUrl}
        height={25}
        width={25}
        drawBackground
      />
      <Info>
        <Title>{item.title}</Title>
        <Url ellipsizeMode="tail" numberOfLines={1}>
          {item.url}
        </Url>
      </Info>
    </Cell>
  </TouchContainer>
);

BookmarkCell.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape).isRequired,
  onPress: PropTypes.func,
};

BookmarkCell.defaultProps = {
  onPress: () => {},
};

export default BookmarkCell;
