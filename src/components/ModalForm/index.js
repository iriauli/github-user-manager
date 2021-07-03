import React, { useContext } from "react";
import { useInfo } from "../../context/UserContext";
import styles from "./ModalForm.module.css";

function ModalForm({ property, setShowModal }) {
  const { setFavorites } = useContext(useInfo);

  function deleteFavorites() {
    setFavorites((prev) =>
      prev.filter((item) => item.username !== property.username)
    );
    console.log(property);
    setShowModal(true);
  }
  return (
    <div className={styles.container}>
      <h1>You really want to delete {property.login}?</h1>
      <div className={styles.buttons}>
        <button onClick={deleteFavorites}>Yes</button>
        <button onClick={() => setShowModal(false)}>No</button>
      </div>
    </div>
  );
}

export default ModalForm;