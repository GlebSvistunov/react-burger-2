import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./card.module.css"
import { useDrag } from "react-dnd"
import {
  DND_BURGER_TYPE,
  DND_INGREDIENT,
} from "../../services/constants/dnd-items"

function Card({ item, onClick }) {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: DND_BURGER_TYPE,
    item: { type: DND_INGREDIENT, item },
    collect: (monitor) => {
      // console.log("drag", monitor)
      return {
        isDragging: !!monitor.isDragging(),
      }
    },
  }))

  const opacity = isDragging ? 0.4 : 1

  return (
    <div ref={drag} style={{ opacity }} onClick={onClick}>
      <section className={styles.item}>
        <img src={item.image} alt="" />
        <div className={styles.price}>
          <span className="text text_type_digits-default m-1">
            {item.price}
          </span>
          <CurrencyIcon />
        </div>
        <div className={`${styles.name} text text_type_main-default`}>
          {item.name}
        </div>
      </section>
    </div>
  )
}

// Card.propTypes = {
//   data: PropTypes.shape(BurgerItemType),
//   setCurrentIngredient: PropTypes.func.isRequired,
// }

export default Card
