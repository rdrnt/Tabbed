import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';

import { globals, localStorage } from '../helpers';

import { bookmarkActions } from '../actions';

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

    console.log('propsies', this.props);
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
    const { navigator } = this.props;

    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'save') {
        this._onSubmit();
      }
    }
  }

  _onSubmit() {
    const { dispatch } = this.props;
    const value = this._form.getValue();
    if (value) {
      console.log('adding new bookmark');
      dispatch(bookmarkActions.addBookmark());
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={Bookmark} options={options} />
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
