function bookmarks(state = [], action) {
  switch (action.type) {
    case 'GET_BOOKMARKS': {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}

export default bookmarks;
