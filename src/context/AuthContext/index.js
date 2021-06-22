import { createContext, useContext, useEffect, useReducer } from "react";
import { signInUser } from "../../api/auth";
import { parseToken, toggleSession } from "../../utils/jwt";
import { authLogin, authLogout } from "./actions";
import { initializeAuthEffect } from "./effect";
import { initialState, reducer } from "./reducer";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispach] = useReducer(reducer, initialState);

  async function login(username, password) {
    const response = await signInUser(username, password);
    const { token } = response;
    toggleSession(token);
    const { payload } = parseToken(token);
    dispach(authLogin(payload));
  }

  function logout() {
    toggleSession(null);
    dispach(authLogout());
  }

  useEffect(() => {
    initializeAuthEffect(dispach);
  }, []);

  if (!state.isInitialized) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error();
  }
  return context;
}

export { AuthContextProvider, useAuth };
