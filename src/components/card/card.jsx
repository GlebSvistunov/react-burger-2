import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./card.module.css";

function Card ({image, price, name}) {
  return (
    <section className={styles.item}>
      <img src={image} alt={image} />
      <div className={styles.price}>
        <span className="text text_type_digits-default m-1">{price}</span>
        <CurrencyIcon />
      </div>
      <div className={`${styles.name} text text_type_main-default`}>
        {name}
      </div>
    </section>
  );
};

export default Card;
