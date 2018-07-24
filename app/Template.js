import React from 'react';
import { Provider } from 'react-redux';

import RootStack from './router';

import store from './store';

const Template = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default Template;
