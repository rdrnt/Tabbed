function common(state = [], action) {
  switch (action.type) {
    case 'UPDATE_AUTH_STATUS': {
      return { ...state, isAuthenticated: action.bool };
    }
    default: {
      return state;
    }
  }
}

export default common;
