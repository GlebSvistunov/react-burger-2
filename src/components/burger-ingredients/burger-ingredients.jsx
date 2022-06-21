import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import styles from "./burger-ingredients.module.css";
import CategoryIngredient from "../category-ingredients/category-ingredients";

function BurgerIngredients() {
  
  const [current, setCurrent] = React.useState('bun')
  return (
    <section className={styles.MainBurgerIngredients}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <section className={styles.ingredients}>
        <div style={{ display: "flex" }}>
          <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </section>

      <div className={styles.sections}>
        <CategoryIngredient
          title="Булки"
          sectionName="bun"
        />
        <CategoryIngredient
          title="Соусы"
          sectionName="sauce"
        />
        <CategoryIngredient
          title="Начинки"
          sectionName="main"
        />
      </div>
    </section>
  );
}

export default BurgerIngredients;
