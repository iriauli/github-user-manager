import SignUpForm from "../../components/SignUpForm";
import Styles from "./SignUp.module.css";

function SignUp() {
  return (
    <div className={Styles.SignUp}>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
