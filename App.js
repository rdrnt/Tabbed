import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';

import store from './app/store';
import { registerScreens, tabs } from './app/router';

registerScreens();

Navigation.startTabBasedApp({
  tabs: tabs,
  appStyle: {
    largeTitle: true,
  },
  tabsStyle: {
    tabBarSelectedButtonColor: '#000000',
    tabBarSelectedLabelColor: '#000000',
  },
});
