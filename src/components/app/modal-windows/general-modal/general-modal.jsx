import ReactDOM from "react-dom"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import ModalOverlay from "../modal-overlay/modal-overlay"
import styles from "../modal-overlay/modal-overlay.module.css"
import PropTypes from "prop-types"
import { useCallback, useEffect } from "react"

const generalModal = document.getElementById("general-modal")

function GeneralModal({ title, isOpen, setClose, children }) {
  const escFunction = useCallback(
    (e) => {
      e.key === "Escape" && setClose()
    },
    [setClose]
  )
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)
    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  })

  return ReactDOM.createPortal(
    <ModalOverlay
      isOpen={isOpen}
      setClose={setClose}
      title="Детали ингредиента"
    >
      <section
        className={styles.Main}
        onClick={(e) => {
          e.stopPropagation()
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
  )
}
GeneralModal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setClose: PropTypes.func.isRequired,
}

export default GeneralModal
