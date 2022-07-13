import React from "react"
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components"
import IngredientSection from "./ingredient-section/ingredient-section"

const BurgerIngredients = ({ items, setCurrentIngredient }) => {
  const [current, setCurrent] = React.useState("bun")

  return (
    <>
      <section className={styles.all}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={styles.flex}>
          <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="main" active={current === "main"} onClick={setCurrent}>
            Начинки
          </Tab>
          <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
            Соусы
          </Tab>
        </div>
      </section>
      <div className={styles.sections}>
        <IngredientSection
          title="Булки"
          items={items.filter((item) => item.type === "bun")}
        />
        <IngredientSection
          title="Начинки"
          items={items.filter((item) => item.type === "main")}
        />
        <IngredientSection
          title="Соусы"
          items={items.filter((item) => item.type === "sauce")}
        />
      </div>
    </>
  )
}
// BurgerIngredients.propTypes = {
//   setCurrentIngredient: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)).isRequired,
// }

export default BurgerIngredients
