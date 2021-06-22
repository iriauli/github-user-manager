import ACTIONS from "./constants";

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.AUTH_INITIALIZED: {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
      };
    }
    case ACTIONS.AUTH_LOGIN: {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case ACTIONS.AUTH_LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default:
      return state;
  }
}

export { initialState, reducer };
