import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Styles from "./SignInForm.module.css";

function isInputsEmpty(username, password) {
  return !username || !password;
}

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    login(username, password);
  }

  const disableButton = isInputsEmpty(username, password);

  return (
    <div className={Styles.Form}>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="username">
          Username
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            value={password}
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className={Styles.SignInButton}
          disabled={disableButton}
          type="submit"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className={Styles.Info}>
          Don't have an account yet? <Link to="/signup">Sign Up now</Link>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
