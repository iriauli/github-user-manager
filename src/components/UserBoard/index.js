import { useAuth } from "../../context/AuthContext";
import Styles from "./UserBoard.module.css";

function UserBoard() {
  const { logout, user } = useAuth();

  return (
    <div className={Styles.UserBoard}>
      <div className={Styles.Greeting}>
        <p>
          hello,<span>{user.firstName}</span>
        </p>
        <button className={Styles.Button} onClick={logout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default UserBoard;
