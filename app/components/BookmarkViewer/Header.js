import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { typography } from '../../styles';

import BookmarkImage from '../Bookmark/BookmarkImage';

const Container = styled.View`
  width: 100%;
`;

const Info = styled.View`
  margin-bottom: 20px;
  align-self: center;
  flex-direction: column;
  align-items: center;
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
    </Info>
  </Container>
);

BookmarkViewerHeader.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default BookmarkViewerHeader;
