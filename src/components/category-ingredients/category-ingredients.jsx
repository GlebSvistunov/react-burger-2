import React from "react";
import Ingredient from "../ingredient/ingredient";
import data from "../utils/data";
import styles from "./category-ingredients.module.css";

function CategoryIngredient() {
  return (
    <section className={styles.section}>
      <h2 className="text text_type_main-medium">qweqeeqweqe</h2>
      <div className={styles.items}>
        {data.map((data) => {
          return (
            <Ingredient
              key={data._id}
              item={data}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CategoryIngredient;
