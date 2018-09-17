import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-native-pose';

const AnimatedContainer = styled(
  posed.View({
    visible: {
      opacity: 1,
      scaleY: 1,
    },
    hidden: {
      opacity: 0,
      scaleY: 0,
    },
  })
)`
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

const BookmarkSearch = props => {
  console.log('The props are', props);
  return (
    <AnimatedContainer pose={props.enabled ? 'visible' : 'hidden'}>
      <Search
        value=""
        onChangeText={value => console.log(value)}
        placeholder="Search..."
        clearButtonMode="while-editing"
        multiline={false}
      />
    </AnimatedContainer>
  );
};

BookmarkSearch.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

export default BookmarkSearch;
