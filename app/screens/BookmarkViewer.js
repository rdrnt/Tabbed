import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

import GradientContainer from '../components/GradientContainer';

import BookmarkViewerHeader from '../components/BookmarkViewer/Header';
import BookmarkViewerList from '../components/BookmarkViewer/List';

import PrivateView from '../components/PrivateView';

import { biometrics } from '../helpers';

class BookmarkViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUnlocked: true,
    };
  }

  componentDidMount() {
    /*
    biometrics.authenticate(unlocked => {
      this.setState({
        isUnlocked: unlocked,
      });
    });
    */
  }

  render() {
    const { navigation } = this.props;
    const { isUnlocked } = this.state;

    const item = navigation.getParam('item', {});

    return (
      <GradientContainer>
        <PrivateView isUnlocked={isUnlocked}>
          <BookmarkViewerHeader item={item} />
          <BookmarkViewerList item={item} />
        </PrivateView>
      </GradientContainer>
    );
  }
}

BookmarkViewer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect()(BookmarkViewer);
