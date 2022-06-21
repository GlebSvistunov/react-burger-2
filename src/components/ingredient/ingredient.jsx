import React from "react";
import { CurrencyIcon, Counter,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient.module.css";

function Ingredient({ ingredient, setCurrentIngredient }) {
  return (
    <section className={styles.ingredient} onClick={() => setCurrentIngredient(ingredient)}>
      <Counter count={1} size="default" />
      <img src={ingredient.image} />
      <div className={styles.price}>
        <span className="text text_type_digits-default m-1">{ingredient.price}</span>
        <CurrencyIcon />
      </div>
      <div className={'text text_type_main-default'}>
        {ingredient.name}
      </div>
    </section>
  );
}

export default Ingredient;