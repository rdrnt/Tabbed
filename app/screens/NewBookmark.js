import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globals } from '../helpers';

import AddBookmarkForm from '../components/Forms/AddBookmarkForm';

class NewBookmark extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    console.log('NewBookmark props', this.props);

    this.state = {
      formValues: {
        title: '',
        url: '',
        isPrivate: false,
      },
    };
  }

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'save',
        systemItem: 'save',
      },
    ],
  };

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'save') {
        this.onSubmit();
      }
    }
  }

  onChange(values) {
    console.log(values);
    this.setState({
      formValues: values,
    });
  }

  onSubmit() {
    console.log('addBookmark onSubmit');

    const { formValues } = this.state;
    const { dispatch } = this.props;

    // Adding the bookmark
    dispatch(bookmarkActions.addBookmark(formValues));

    // go back to main screen
    this.props.navigator.popToRoot();
  }

  render() {
    return (
      <View style={styles.container}>
        <AddBookmarkForm
          ref={c => (this._form = c)}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: globals.colors.lighterGrey,
  },
});

export default connect()(NewBookmark);
