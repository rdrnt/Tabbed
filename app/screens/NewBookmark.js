import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';

import { globals, localStorage } from '../helpers';

import { bookmarkActions } from '../actions';

import AddBookmarkForm from '../components/Forms/AddBookmarkForm';

const Form = t.form.Form;

const Bookmark = t.struct({
  title: t.String,
  url: t.String,
  isPrivate: t.Boolean,
});

const formStyles = {
  ...Form.stylesheet,
  textbox: {
    normal: {
      borderWidth: 0,
      backgroundColor: globals.colors.white,
    },
  },
  controlLabel: {
    normal: {
      backgroundColor: globals.colors.white,
      width: '100%',
    },
  },
  checkbox: {
    normal: {
      backgroundColor: '#E5F213',
    },
  },
};

const options = {
  auto: 'placeholders',
  stylesheet: formStyles,
  fields: {
    isPrivate: {
      label: 'Private',
    },
  },
};

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

    // dispatch(bookmarkActions.addBookmark(formValues));

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
