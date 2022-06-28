import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientSection from "./ingredient-section/ingredient-section";
import PropTypes from "prop-types";
import BurgerItemType from "../utils/prop-types/prop-types";

const BurgerIngredients = ({ items: data, setCurrentIngredient }) => {
  const [current, setCurrent] = React.useState("one");

  return (
    <>
      <section className={styles.all}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={styles.flex}>
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </section>
      <div className={styles.sections}>
        <IngredientSection
          title="Булки"
          items={data.filter((item) => item.type === "bun")}
          setCurrentIngredient={setCurrentIngredient}
        />
        <IngredientSection
          title="Соусы"
          items={data.filter((item) => item.type === "sauce")}
          setCurrentIngredient={setCurrentIngredient}
        />

        <IngredientSection
          title="Начинки"
          items={data.filter((item) => item.type === "main")}
          setCurrentIngredient={setCurrentIngredient}
        />
      </div>
    </>
  );
};
BurgerIngredients.propTypes = {
  setCurrentIngredient: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)).isRequired,
};

export default BurgerIngredients;
