
import { Link } from "react-router-dom";
import Styles from "./FavCard.module.css";
import { useContext, useEffect, useState } from "react";
import { FetchEachUser } from "../../api/FetchUsers";
import { useInfo } from "../../context/UserContext";

import ExitFavorite from "../ExitFavorite";

function FavCard({ property }) {
  const [followers, setFollowers] = useState("");
  const [followings, setfollowings] = useState("");

  const { setUserInfo } = useContext(useInfo);

  const formatter = new Intl.NumberFormat('en', {
    style: 'decimal',
    useGrouping: true,
    notation: 'compact'
});

  useEffect(() => {
    FetchEachUser(property.username).then((data) => {
      setFollowers(data.followers);
    });

    FetchEachUser(property.username).then((data) => {
      setfollowings(data.following);
    });
  }, []);


  return (
    <>
   <div className={Styles.UserCard}>
   <ExitFavorite />
      <h3>{property.username}</h3>
      {!property.url ? (
        " "
      ) : (
        <img className="asdasd" src={property.url} alt="avatar" />
      )}
      <p className={Styles.Followers}><span>{formatter.format(followers)}</span> followers </p>
      <p className={Styles.Following}><span>{followings}</span> following</p>
      <div className={Styles.CardBot}>
        <Link to={`/users/${property.username}`}>
          <button
            onClick={() =>
              setUserInfo({
                username: property.login,
                url: property.avatar_url,
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
    </>
  );
}

export default FavCard;