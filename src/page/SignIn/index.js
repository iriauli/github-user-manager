import SignInForm from "../../components/SignInForm";
import Styles from "./SignIn.module.css";

function SignIn({ location }) {
  const { state } = location;

  return (
    <div className={Styles.SignIn}>
      {state?.success && (
        <h3>Thanks! your account has been successfully created.</h3>
      )}
      <SignInForm />
    </div>
  );
}

export default SignIn;
