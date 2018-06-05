import React, { Component } from 'react';

import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';

import { globals } from '../../helpers';

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

class AddBookmarkForm extends Component {
  constructor(props) {
    super(props);
  }

  _onSubmit() {
    const { dispatch } = this.props;
    const value = this._form.getValue();
    if (value) {
      console.log('adding new bookmark');
    }
  }

  render() {
    return (
      <View>
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

export default connect()(AddBookmarkForm);
