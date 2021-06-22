import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUpUser } from "../../api/auth";
import Styles from "./SignUpForm.module.css";
import ROUTES from "../../constants/routes";

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });

  const history = useHistory();

  function handleSignUp(e) {
    e.preventDefault();
    signUpUser(user)
      .then(() => history.push(ROUTES.PAGE_SIGN_IN, { success: true }))
      .catch((e) => console.log(e.message));
  }

  return (
    <div className={Styles.Form}>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">
          Username
          <input
            value={user.username}
            type="text"
            id="username"
            name="username"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="firstName">
          Firstname
          <input
            value={user.firstName}
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="lastName">
          Lastname
          <input
            value={user.lastName}
            type="text"
            id="lasttName"
            name="lastName"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            value={user.email}
            type="email"
            id="email"
            name="email"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="birthDate">
          Date
          <input
            value={user.birthDate}
            type="date"
            id="birthDate"
            name="birthDate"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            value={user.password}
            type="password"
            id="password"
            name="password"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <button
          className={Styles.SignUpButton}
          type="submit"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p className={Styles.Info}>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
