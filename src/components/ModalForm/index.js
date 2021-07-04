import React, { useContext } from "react";
import { useInfo } from "../../context/UserContext";
import styles from "./ModalForm.module.css";

function ModalForm({ property, setShowModal }) {
  const { setFavorites } = useContext(useInfo);

  function deleteFavorites() {
    setFavorites((prev) =>
      prev.filter((item) => item.username != property.username)
    );
    console.log(property);
    setShowModal(true);
  }
  return (
    <div className={styles.Overlay}>
    <div className={styles.Modal}>
      <h2>Are you sure you want to delete '<span>{property.username}</span>'?</h2>
      <img className={styles.Avatar} src={property.url} alt="avatar" />
      <div className={styles.Buttons}>
        <button className={styles.ActiveButton} onClick={deleteFavorites}>Yes</button>
        <button className={styles.PassiveButton} onClick={() => setShowModal(false)}>No</button>
      </div>
    </div>
    </div>
  );
}

export default ModalForm;