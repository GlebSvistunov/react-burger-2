import styles from "./modal-overlay.module.css";
import { useCallback, useEffect } from "react";

function ModalOverlay({ children, isOpen, setClose }) {
  const escFunction = useCallback((e) => {
    e.key === "Escape" && setClose();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

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

export default ModalOverlay;
