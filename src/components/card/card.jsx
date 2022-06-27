import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./card.module.css";
import PropTypes from "prop-types";
import BurgerItemType from "../utils/prop-types/prop-types";

function Card({ data, setCurrentIngredient }) {
  return (
    <section className={styles.item} onClick={() => setCurrentIngredient(data)}>
      <img src={data.image} alt="" />
      <div className={styles.price}>
        <span className="text text_type_digits-default m-1">{data.price}</span>
        <CurrencyIcon />
      </div>
      <div className={`${styles.name} text text_type_main-default`}>
        {data.name}
      </div>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.shape(BurgerItemType),
  setCurrentIngredient: PropTypes.func.isRequired,
};

export default Card;
