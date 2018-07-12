import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookmarkViewerHeader from '../components/BookmarkViewer/Header';
import BookmarkViewerList from '../components/BookmarkViewer/List';

import PrivateView from '../components/PrivateView';

import { biometrics } from '../helpers';

class BookmarkViewer extends Component {
  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Close',
        id: 'close',
      },
    ],
    rightButtons: [
      {
        title: 'Edit',
        id: 'edit',
      },
    ],
  };

  constructor(props) {
    super(props);

    console.log('BookmarkViewer props', props);

    this.state = {
      isUnlocked: true,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'close') {
        this.props.navigator.dismissModal();
      }
    }
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
    const { item } = this.props;
    const { isUnlocked } = this.state;
    return (
      <PrivateView isUnlocked={isUnlocked}>
        <BookmarkViewerHeader item={item} />
        <BookmarkViewerList item={item} />
      </PrivateView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

BookmarkViewer.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape).isRequired,
  navigator: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect()(BookmarkViewer);
