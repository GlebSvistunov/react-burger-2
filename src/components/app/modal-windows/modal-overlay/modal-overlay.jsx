import styles from "./modal-overlay.module.css";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

function ModalOverlay({ children, isOpen, setClose }) {
  const escFunction = useCallback(
    (e) => {
      e.key === "Escape" && setClose();
    },
    [setClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  return (
    <div
      className={`${styles.ModalOverlay} ${isOpen && styles.Opened}`}
      onClick={() => {
        setClose();
      }}
    >
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
