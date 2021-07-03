import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { FetchEachUser } from "../../api/FetchUsers";
import { useInfo } from "../../context/UserContext";

function Card({ user }) {
  const [followers, setFollowers] = useState("");
  const [followings, setfollowings] = useState("");

  const { setUserInfo } = useContext(useInfo);

  const formatter = new Intl.NumberFormat('en', {
      style: 'decimal',
      useGrouping: true,
      notation: 'compact'
  });

  useEffect(() => {
    FetchEachUser(user.login).then((data) => {
      setFollowers(data.followers);
    });

    FetchEachUser(user.login).then((data) => {
      setfollowings(data.following);
    });
  }, [user.login]);



  return (
    <div className={styles.UserCard}>
      <h3>{user.login}</h3>
      <img src={user.avatar_url} alt="avatar" />
      <p className={styles.Followers}><span>{formatter.format(followers)}</span> Followers </p>
      <p className={styles.Following}><span>{followings}</span> Following</p>
      <div className={styles.CardBot}>
        <Link to={`/users/${user.login}`}>
          <button
            onClick={() =>
              setUserInfo({
                username: user.login,
                url: user.avatar_url,
                followers: followers,
                followings: followings,
              })
            }
            className={styles.SeeMore}
          >
            <span>See More</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
