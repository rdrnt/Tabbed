import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-native-pose';

/*
const AnimatedContainer = styled(
  posed.View({
    visible: {
      opacity: 1,
      scaleY: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      scaleY: 0,
      y: -50,
    },
  })
)``;
*/

const Search = styled.TextInput`
  background-color: white;
  height: 50px;
  margin: 16px;
  padding: 0px 16px;
  border-radius: 8;
  font-weight: 600;
  font-size: 17px;
`;

const BookmarkSearch = ({ onChangeText, value }) => (
  <Search
    value={value}
    onChangeText={onChangeText}
    placeholder="Search..."
    clearButtonMode="while-editing"
    multiline={false}
    autoCorrect={false}
  />
);

BookmarkSearch.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

BookmarkSearch.defaultProps = {
  value: '',
};

export default BookmarkSearch;
