function bookmarks(state = [], action) {
  switch (action.type) {
    case 'GET_BOOKMARKS': {
      return { ...state };
    }
    case 'UPDATE_BOOKMARKS': {
      return { ...state, list: action.list };
    }
    default: {
      return state;
    }
  }
}

export default bookmarks;
