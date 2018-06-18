import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import defaultState from './data/defaultState';

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(middleware)
);

export default store;
