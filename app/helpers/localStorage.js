import Realm from 'realm';

const BookmarkSchema = {
  name: 'Bookmark',
  properties: {
    title: 'string',
    url: 'string',
    isPrivate: { type: 'bool', default: false },
    categories: 'string[]',
  },
};
const BookmarkSchemaVersion = 1;

const realm = new Realm({
  schema: [BookmarkSchema],
  schemaVersion: BookmarkSchemaVersion,
});

console.log(realm.path);

const localStorage = {
  getAllBookmarks: callback => {
    const allBookmarks = realm.objects('Bookmark');
    callback(allBookmarks);
  },

  saveBookmark: bookmark => {
    // get the bookmarks
    realm.write(() => {
      /*
      realm.create('Bookmark', {
        title: 'Cool dog',
        url: 'https://google.ca',
        isPrivate: false,
        categories: ['art'],
      });
      */
    });
  },

  deleteAllBookmarks: () => {},
};

export default localStorage;
