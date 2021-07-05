import { useContext } from "react";
import Header from "../../components/Header";
import Styles from "./Favorites.module.css";
import { useInfo } from "../../context/AppContext";
import FavoritesCard from "../../components/FavoritesCard";

function Favorites() {
  const { favorites } = useContext(useInfo);

  return (
    <>
      <Header />
      <div className={Styles.Fav}>
        <h1>Favorites</h1>
        <div className={Styles.Favorites}>
          {favorites.map((item) => (
            <div key={item.username}>
              <FavoritesCard property={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
