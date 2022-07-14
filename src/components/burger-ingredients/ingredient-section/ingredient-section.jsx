import Card from "../../card/card"
import styles from "./ingredient-section.module.css"
import { useDispatch } from "react-redux"
import { openCurrentIngredient } from "../../../services/action/current-ingredient"

function IngredientSection({ title, items }) {
  const dispatch = useDispatch()
  return (
    <section className={styles.section}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <div className={styles.items}>
        {items.map((item) => (
          <Card
            item={item}
            key={item._id}
            onClick={() => dispatch(openCurrentIngredient(item))}
          />
        ))}
      </div>
    </section>
  )
}

// IngredientSection.propTypes = {
//   title: PropTypes.string.isRequired,
//   items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)).isRequired,
// }

export default IngredientSection
