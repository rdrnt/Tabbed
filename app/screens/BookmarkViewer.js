import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

// import BookmarkViewerHeader from '../components/BookmarkViewer/Header';
import PrivateView from '../components/PrivateView';

import { biometrics } from '../helpers';

export default class BookmarkViewer extends Component {
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
