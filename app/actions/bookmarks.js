import { localStorage, sorter } from '../helpers';

// bookmark actions
const bookmarkActions = {
  updateBookmarks: list => ({
    type: 'UPDATE_BOOKMARKS',
    list,
  }),

  addBookmark: bookmark => dispatch => {
    localStorage.addNewBookmark();
  },

  fetchBookmarks: () => dispatch => {
    localStorage.getAllBookmarks(bookmarks => {
      dispatch(bookmarkActions.updateBookmarks(bookmarks));
    });
  },
};

export default bookmarkActions;
