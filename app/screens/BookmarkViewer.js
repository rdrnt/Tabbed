import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookmarkViewerHeader from '../components/BookmarkViewer/Header';
import PrivateView from '../components/PrivateView';

import { biometrics } from '../helpers';

class BookmarkViewer extends Component {
  constructor(props) {
    super(props);

    console.log('BookmarkViewer props', props);

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
    const { item } = this.props;
    const { isUnlocked } = this.state;
    return (
      <PrivateView isUnlocked={isUnlocked}>
        <BookmarkViewerHeader item={item} />
        <Text>
          {isUnlocked} lol {item.title}
        </Text>
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
