import ls from 'react-native-local-storage';

const BOOKMARK_KEY = 'BOOKMARKS';

const localStorage = {
  getBookmarks: callback => {
    ls.get(BOOKMARK_KEY).then(data => {
      if (data === null) {
        callback([]);
      }
      callback(data);
    });
  },

  saveBookmark: bookmark => {
    // get the bookmarks
    localStorage.getBookmarks(bookmarks => {
      // Save the bookmark
      console.log('Bookmarks are', bookmarks);
      bookmarks.push(bookmark);
      ls.save(BOOKMARK_KEY, bookmarks).then(() => {});
    });
  },

  deleteAllBookmarks: () => {
    ls.clear();
  },
};

export default localStorage;
