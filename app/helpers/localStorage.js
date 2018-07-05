import Realm from 'realm';

const BookmarkSchema = {
  name: 'Bookmark',
  properties: {
    title: 'string',
    url: 'string',
    isPrivate: { type: 'bool', default: false },
    dateCreated: { type: 'date', default: new Date() },
  },
};
const BookmarkSchemaVersion = 1;

const realm = new Realm({
  schema: [BookmarkSchema],
  schemaVersion: BookmarkSchemaVersion,
});

console.log(realm.path);

realm.objects('Bookmark').addListener((bookmarks, changes) => {
  console.log('changes', changes);
  const { deletions, insertions, modifications } = changes;

  changes.insertions.forEach(index => {
    let modifiedMarks = bookmarks[index];
    console.log('modifiedMarks', modifiedMarks);
    console.log(modifiedMarks.title);
  });

  console.log('localStorage Realm: deletion', deletions);
  console.log('localStorage Realm: insertions', insertions);
  console.log('localStorage Realm: modifications', modifications);
});

const localStorage = {
  getAllBookmarks: callback => {
    const allBookmarks = realm.objects('Bookmark');
    callback(allBookmarks);
  },

  addNewBookmark: bookmark => {
    realm.write(() => {
      realm.create('Bookmark', {
        title: bookmark.title,
        url: bookmark.url,
        isPrivate: bookmark.isPrivate || false,
        categories: ['food', 'animals', 'doggies'],
      });
    });
  },

  getAllBookmarkCategories(callback) {
    // We'll store the unique categories from each bookmark in here
    const uniqueCategories = [];
    // Getting all the bookmarks
    this.getAllBookmarks(bookmarks => {
      // Going through each bookmark
      bookmarks.forEach(bookmark => {
        // Going through each bookmark category
        bookmark.categories.forEach(category => {
          // If it's not already in our unique categories, add it
          if (!uniqueCategories.includes(category.toString())) {
            uniqueCategories.push(category);
          }
        });
      });
    });
    callback(uniqueCategories);
  },
};

export default localStorage;
