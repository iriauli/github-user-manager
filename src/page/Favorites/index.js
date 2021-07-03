import { useContext } from "react";
import Header from "../../components/Header";
import Styles from "./Favorites.module.css";
import {useInfo } from "../../context/UserContext"
import FavCard from "../../components/FavCard";

function Favorites() {
  const { favorites } = useContext(useInfo);

  return (
    <>
      <Header />
      <div className={Styles.Favorites}>
<h1>Favorites</h1>
      {favorites.map((item) => (
        <div key={item.username}>
          <FavCard property={item} key={item.id} />
        </div>
      ))}
      </div>
    </>
  );
}

export default Favorites;
