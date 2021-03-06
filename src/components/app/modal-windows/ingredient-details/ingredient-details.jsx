import styles from "./ingredients-details.module.css";
import PropTypes from "prop-types";
import BurgerItemType from "../../../utils/prop-types/prop-types";

function IngredientDetails({ currentIngredient }) {
  return (
    currentIngredient && (
      <section className={styles.Details}>
        <img src={currentIngredient.image_large} className="mt-8" alt="" />
        <p className="mt-4 text text_type_main-medium">
          {currentIngredient.name}
        </p>
        <p className="mt-4 text text_type_main-medium">
          Цена: {currentIngredient.price}
        </p>

        <table
          border="0"
          cellSpacing="20"
          cellPadding="0"
          className="text text_color_inactive mt-8"
        >
          <thead>
            <tr className="text_type_main-small">
              <td>Калории,ккал</td>
              <td>Белки, г</td>
              <td>Жиры, г</td>
              <td>Углеводы, г</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text text_type_digits-default">
              <td>{currentIngredient.calories}</td>
              <td>{currentIngredient.proteins}</td>
              <td>{currentIngredient.fat}</td>
              <td>{currentIngredient.carbohydrates}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  );
}

IngredientDetails.propTypes = {
  currentIngredient: PropTypes.shape(BurgerItemType),
};

export default IngredientDetails;
