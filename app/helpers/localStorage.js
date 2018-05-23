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

realm.objects('Bookmark').addListener((event, changes) => {
  console.log('event', event, changes);
});

const localStorage = {
  getAllBookmarks: callback => {
    const allBookmarks = realm.objects('Bookmark');
    callback(allBookmarks);
  },

  addNewBookmark: () => {
    realm.write(() => {
      realm.create('Bookmark', {
        title: 'Bobby',
        url: 'https://burger.com',
        isPrivate: false,
        categories: ['food'],
      });
    });
  },
};

export default localStorage;
