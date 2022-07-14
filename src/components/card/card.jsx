import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./card.module.css"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import BurgerItemType from "../utils/prop-types/prop-types"
import { useDrag } from "react-dnd"
import {
  DND_BURGER_TYPE,
  DND_INGREDIENT,
} from "../../services/constants/dnd-items"

function Card({ item, onClick }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DND_BURGER_TYPE,
    item: { type: DND_INGREDIENT, item },
    collect: (monitor) => {
      // console.log("drag", monitor)
      return {
        isDragging: !!monitor.isDragging(),
      }
    },
  }))
  const burger = useSelector((store) => store.burgerReducer.burger)

  const opacity = isDragging ? 0.4 : 1
  const count =
    burger.components.filter((x) => x.ingredient._id === item._id).length +
    (burger.bun && burger.bun._id === item._id ? 2 : 0)

  return (
    <div ref={drag} style={{ opacity }} onClick={onClick}>
      <section className={styles.item}>
        <img src={item.image} alt="" />
        <div className={styles.price}>
          <span className="text text_type_digits-default m-1">
            {item.price}
          </span>
          <CurrencyIcon />
          {count > 0 && <Counter count={count} size="default" />}
        </div>
        <div className={`${styles.name} text text_type_main-default`}>
          {item.name}
        </div>
      </section>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.shape(BurgerItemType),
  onClick: PropTypes.func.isRequired,
}

export default Card
