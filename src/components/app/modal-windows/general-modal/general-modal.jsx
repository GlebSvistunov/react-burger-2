import ReactDOM from "react-dom";
import React from "react";
import { useEffect, useState } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "../modal-overlay/modal-overlay.module.css";

const generalModal = document.getElementById("general-modal");

function GeneralModal({title, isOpen, setClose, children}) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return ReactDOM.createPortal(
    <ModalOverlay
      isOpen={isOpen}
      setClose={setClose}
      title="Детали ингредиента"
    >
      <section
        className={styles.Main}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.Header}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button
            className={styles.CloseButton}
            type="button"
            onClick={setClose}
          >
            <CloseIcon />
          </button>
        </div>
        <article className={styles.Content}>{children}</article>
      </section>
    </ModalOverlay>,
    generalModal
  );
}

export default GeneralModal;
