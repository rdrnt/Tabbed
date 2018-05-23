import { combineReducers } from 'redux';

import common from './common';
import bookmarks from './bookmarks';

const rootReducer = combineReducers({
  common,
  bookmarks,
});

export default rootReducer;
