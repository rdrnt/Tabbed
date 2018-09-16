import React from 'react';
import { SectionList } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BookmarkCell from './BookmarkCell';

const Title = styled.Text`
  font-weight: bold;
  color: white;
`;

const HeaderContainer = styled.View`
  background-color: 'rgba(255, 255, 255, 0.0)';
  padding: 0px 16px;
`;

const Seperator = styled.View`
  background-color: 'rgba(255, 255, 255, 0.0)';
  height: 1px;
  margin-left: 16px;
`;

const BookmarkList = ({ bookmarks, navigation }) => {
  // Item seperator
  const renderitemSeparator = () => <Seperator />;

  // The headeer for each section
  const renderSectionHeader = ({ section }) => (
    <HeaderContainer>
      <Title>{section.title}</Title>
    </HeaderContainer>
  );

  const onCellPress = item => {
    navigation.navigate('BookmarkViewer', {
      item,
    });
  };

  const renderItem = ({ item, index }) => (
    <BookmarkCell key={index} item={item} onPress={onCellPress} />
  );

  return (
    <SectionList
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={renderitemSeparator}
      sections={bookmarks}
      keyExtractor={(item, index) => item + index}
    />
  );
};

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape).isRequired,
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default BookmarkList;
