function bookmarks(state = [], action) {
  console.log('The state is', state);
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
