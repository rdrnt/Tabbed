import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.View`
  padding: 16px;
`;

const Search = styled.TextInput`
  background-color: white;
  height: 50px;
  padding: 0px 16px;
  border-radius: 8;
  font-weight: 600;
  font-size: 17px;
`;

const BookmarkSearch = ({ onChangeText }) => {
  return (
    <Container>
      <Search
        value=""
        onChangeText={value => console.log(value)}
        placeholder="Search..."
        clearButtonMode="while-editing"
        multiline={false}
      />
    </Container>
  );
};

BookmarkSearch.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

export default BookmarkSearch;
