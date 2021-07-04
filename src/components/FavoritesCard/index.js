import { Link } from "react-router-dom";
import Styles from "./FavoritesCard.module.css";
import { useContext, useEffect, useState } from "react";
import { FetchIndividualUser } from "../../api/fetch";
import { useInfo } from "../../context/UserContext";

import Modal from "../Modal";
import ModalForm from "../ModalForm";

function FavCard({ property }) {
  const [followers, setFollowers] = useState("");
  const [followings, setfollowings] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { setUserInfo } = useContext(useInfo);

  const formatter = new Intl.NumberFormat("en", {
    style: "decimal",
    useGrouping: true,
    notation: "compact",
  });

  useEffect(() => {
    FetchIndividualUser(property.username).then((data) => {
      setFollowers(data.followers);
    });

    FetchIndividualUser(property.username).then((data) => {
      setfollowings(data.following);
    });
  }, []);

  return (
    <>
      <div className={Styles.UserCard}>
        <div className={Styles.ExitButton}>
          <button className={Styles.Button} onClick={() => setShowModal(true)}>
            X
          </button>
        </div>

        <h3>{property.username}</h3>
        {!property.url ? " " : <img src={property.url} alt="avatar" />}
        <p className={Styles.Followers}>
          <span>{formatter.format(followers)}</span> followers{" "}
        </p>
        <p className={Styles.Following}>
          <span>{followings}</span> following
        </p>
        <div className={Styles.CardBot}>
          {showModal && (
            <Modal>
              <ModalForm property={property} setShowModal={setShowModal} />
            </Modal>
          )}

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
