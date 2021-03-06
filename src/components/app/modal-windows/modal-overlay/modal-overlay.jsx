import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ children, isOpen, setClose }) {
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
