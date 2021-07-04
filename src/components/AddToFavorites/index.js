import React, { useContext, useEffect, useState } from "react";
import { useInfo } from "../../context/UserContext";

import Styles from "./AddToFavorites.module.css";

function AddToFavorites() {
  const { userInfo, favorites, setFavorites } = useContext(useInfo);
  const [isFav, setIsFav] = useState(true);

  useEffect(() => {
    if (
      favorites.filter((item) => item.username === userInfo.username).length > 0
    )
      setIsFav(true);
    else setIsFav(false);
  }, [favorites]);

  function addFavorite() {
    setFavorites((prev) => [
      ...prev,
      { username: userInfo.username, url: userInfo.url },
    ]);
  }

  function removeFavorite() {
    setFavorites((prev) =>
      prev.filter((item) => item.username !== userInfo.username)
    );
  }

  return (
    <div>
      {!isFav ? (
        <div>
          <button className={Styles.ActiveButton} onClick={() => addFavorite()}>
            Add to Favorites
          </button>
        </div>
      ) : (
        <div>
          <button
            className={Styles.PassiveButton}
            onClick={() => removeFavorite()}
          >
            Remove from Favorites
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToFavorites;
