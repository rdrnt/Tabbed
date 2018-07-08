import React from 'react';

import { AppState, View } from 'react-native';

class AppStateUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: AppState.currentState,
    };
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.props.onAppStateChange(AppState.currentState);
  }

  componentDidMount() {
    console.log('hot');
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(nextAppState) {
    if (this.state.appState.match(/inactive/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    } else if (
      this.state.appState.match(/active/) &&
      nextAppState === 'inactive'
    ) {
      console.log('App is now backgrounded');
    }
    this.setState({ appState: nextAppState });
    console.log(nextAppState);
    this.props.onAppStateChange(nextAppState);
  }

  render() {
    return this.props.children;
  }
}

export default AppStateUpdate;
