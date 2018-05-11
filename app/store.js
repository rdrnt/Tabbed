import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import common from './reducers/common';

const middleware = composeWithDevTools();

const store = createStore(common, middleware);

export default store;
