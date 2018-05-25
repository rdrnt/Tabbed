import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const defaultState = {
  bookmarks: [],
};

const middleware = applyMiddleware(thunkMiddleware);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    defaultState,
    composeWithDevTools(middleware)
  );
}
