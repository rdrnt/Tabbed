import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';

import configureStore from './app/store';
import { registerScreens, tabs } from './app/router';

const store = configureStore();

registerScreens(store, Provider);

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
