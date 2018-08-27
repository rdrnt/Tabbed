import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import SvgUri from 'react-native-svg-uri';
import styled from 'styled-components';

import { bookmarkUtils } from '../../helpers';
import { colors } from '../../styles';

/*
  The purpose of this component is to display the Favicon of a bookmark
  This is a url, depending on if it's an SVG or not, we render either
  An SVG component, or regular Image component
*/

// The props are passed in from the BackgroundCircle component
const BackgroundCircle = styled.View`
  background-color: ${colors.flatLightGrey};
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  border-radius: ${props => props.height / 2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookmarkImage = ({ url, height, width, drawBackground }) => {
  // 'Why use an if statement when you can use a ternary operator'
  // I felt like this code would have more than 2 and decrease legibility
  // Maybe I'll come back and find a better way.

  const DisplayImage = bookmarkUtils.isImageSvg(url) ? (
    <SvgUri
      width={width.toString()}
      height={height.toString()}
      source={{ uri: url }}
    />
  ) : (
    <Image source={{ uri: url }} style={{ width, height }} />
  );

  if (drawBackground) {
    return (
      <BackgroundCircle height={height * 2} width={width * 2}>
        {DisplayImage}
      </BackgroundCircle>
    );
  }
  // If we don't want to draw the background
  return DisplayImage;
};

BookmarkImage.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  drawBackground: PropTypes.bool, // Determines if we should show background circle with a light grey color
};

BookmarkImage.defaultProps = {
  height: 50,
  width: 50,
  drawBackground: false,
};

export default BookmarkImage;
