import React, { useState } from "react";
// import Modal from "../Modal";
// import ModalForm from "../ModalForm";
import ExitFavorite from "../ExitFavorite";

function FavCard({ property }) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        {/* <button onClick={() => setShowModal((prev) => !prev)}>Delete</button> */}
      </div>
      <div>
        <img src={property.url} alt="user" />
      </div>
      <div>{property.username}</div>
      <ExitFavorite />
    </div>
  );
}

export default FavCard;