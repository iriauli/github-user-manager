import { Link } from "react-router-dom";
import Styles from "./SearchCard.module.css";
import { useContext, useEffect, useState } from "react";
import { FetchIndividualUser } from "../../api/fetch";
import { useInfo } from "../../context/AppContext";

const SearchCard = ({ item }) => {
  const [followers, setFollowers] = useState("");
  const [followings, setfollowings] = useState("");

  const { setUserInfo } = useContext(useInfo);

  const formatter = new Intl.NumberFormat("en", {
    style: "decimal",
    useGrouping: true,
    notation: "compact",
  });

  useEffect(() => {
    FetchIndividualUser(item.login).then((data) => {
      setFollowers(data.followers);
    });

    FetchIndividualUser(item.login).then((data) => {
      setfollowings(data.following);
    });
  }, []);

  return (
    <div className={Styles.UserCard}>
      <h3>{item.login}</h3>

      {!item.avatar_url ? (
        " "
      ) : (
        <img src={item.avatar_url} alt="avatar" />
      )}
      <p className={Styles.Followers}>
        <span>{formatter.format(followers)}</span> followers{" "}
      </p>
      <p className={Styles.Following}>
        <span>{followings}</span> following
      </p>
      <div className={Styles.CardBot}>
        <Link to={`/users/${item.login}`}>
          <button
            onClick={() =>
              setUserInfo({
                username: item.login,
                url: item.avatar_url,
                followers: followers,
                followings: followings,
              })
            }
            className={Styles.SeeMore}
          >
            <span>See More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchCard;
