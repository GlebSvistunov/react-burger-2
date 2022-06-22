import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientSection from "../burger-ingredients/ingredient-section/ingredient-section";
import data from "../utils/data";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <BurgerIngredients />

      <IngredientSection
        title="Булки"
        items={data.filter((item) => item.type === "bun")}
      />
      <IngredientSection
        title="Соусы"
        items={data.filter((item) => item.type === "sauce")}
      />
      <IngredientSection
        title="Начинки"
        items={data.filter((item) => item.type === "main")}
      />
    </div>
  )
}

export default App;
