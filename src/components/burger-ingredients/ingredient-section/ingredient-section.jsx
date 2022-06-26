import Card from "../../card/card";
import styles from "./ingredient-section.module.css";
import PropTypes from "prop-types";
import BurgerItemType from "../../app/prop-types/prop-types";

function IngredientSection({ title, items, setCurrentIngredient }) {
  return (
    <>
      <section className={styles.section}>
        <h2 className="text text_type_main-medium">{title}</h2>
        <div className={styles.items}>
          {items.map((item) => (
            <Card
              data={item}
              key={item._id}
              setCurrentIngredient={setCurrentIngredient}
            />
          ))}
        </div>
      </section>
    </>
  );
}

IngredientSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)).isRequired,
  setCurrentIngredient: PropTypes.func.isRequired,
};

export default IngredientSection;
