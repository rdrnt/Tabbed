import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { typography } from '../../styles';

import BookmarkImage from '../Bookmark/BookmarkImage';

import HeaderButton, { Icons } from './Button';

const Container = styled.View`
  width: 100%;
`;

const Info = styled.View`
  align-self: center;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
`;

const Title = styled.Text`
  ${typography.title1};
  color: white;
`;

const BookmarkViewerHeader = ({ item }) => (
  <Container>
    <Info>
      <BookmarkImage
        url={item.imageUrl}
        height={40}
        width={40}
        drawBackground
      />
      <Title>{item.title}</Title>
      <HeaderButton iconName={Icons.delete} />
    </Info>
  </Container>
);

BookmarkViewerHeader.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default BookmarkViewerHeader;
