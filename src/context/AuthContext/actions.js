import ACTIONS from "./constants";

function authInitialized(isAuthenticated, user) {
  return {
    type: ACTIONS.AUTH_INITIALIZED,
    payload: {
      isAuthenticated,
      user,
    },
  };
}

function authLogin(user) {
  return {
    type: ACTIONS.AUTH_LOGIN,
    payload: {
      user,
    },
  };
}

function authLogout() {
  return {
    type: ACTIONS.AUTH_LOGOUT,
  };
}

export { authInitialized, authLogin, authLogout };
