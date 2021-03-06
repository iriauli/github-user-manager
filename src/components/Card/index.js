import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { FetchIndividualUser } from "../../api/fetch";
import { useInfo } from "../../context/AppContext";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ user }) {
  const [followers, setFollowers] = useState("");
  const [followings, setfollowings] = useState("");

  const { setUserInfo } = useContext(useInfo);

  // Format Numbers
  const formatter = new Intl.NumberFormat("en", {
    style: "decimal",
    useGrouping: true,
    notation: "compact",
  });

  useEffect(() => {
    FetchIndividualUser(user.login).then((data) => {
      setFollowers(data.followers);
    });

    FetchIndividualUser(user.login).then((data) => {
      setfollowings(data.following);
    });
  }, [user.login]);

  return (
    <div className={styles.UserCard}>
      <h3>{user.login}</h3>
      <LazyLoadImage effect="blur" src={user.avatar_url} alt="avatar" />
      <p className={styles.Followers}>
        <span>{formatter.format(followers)}</span> Followers{" "}
      </p>
      <p className={styles.Following}>
        <span>{followings}</span> Following
      </p>
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
