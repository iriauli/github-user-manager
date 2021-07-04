import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalElement = document.querySelector("#modal");

function Modal({ children }) {
  const ModalRef = useRef(null);
  if (!ModalRef.current) {
    ModalRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalElement.appendChild(ModalRef.current);

    return () => {
      modalElement.removeChild(ModalRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, ModalRef.current);
}

export default Modal;
