import { localStorage, sorter } from '../helpers';

// bookmark actions
const bookmarkActions = {
  updateBookmarks: list => ({
    type: 'UPDATE_BOOKMARKS',
    list,
  }),

  addBookmark: bookmark => dispatch => {
    // Add the bookmark
    localStorage.addNewBookmark(bookmark);
    // update the bookmarks in the store
    dispatch(bookmarkActions.fetchBookmarks());
  },

  fetchBookmarks: () => dispatch => {
    localStorage.getAllBookmarks(bookmarks => {
      dispatch(bookmarkActions.updateBookmarks(bookmarks));
    });
  },
};

export default bookmarkActions;
