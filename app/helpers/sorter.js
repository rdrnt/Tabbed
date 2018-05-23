const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const sorter = {
  sortForSections: (bookmarks, callback) => {
    // we'll store all the bookmarks we've sorted in here
    const allBookmarks = [];
    // going through the alphabet
    alphabet.forEach(letter => {
      // getting each bookmark that starts with the letter
      const bookmarksWithLetter = bookmarks.filter(
        bookmark => bookmark.title.charAt(0).toUpperCase() === letter
      );
      // If we have an item for that section
      if (bookmarksWithLetter.length !== 0) {
        // Adding to the array
        allBookmarks.push({
          title: letter,
          data: bookmarksWithLetter,
        });
      }
    });
    callback(allBookmarks);
  },
};

export default sorter;
