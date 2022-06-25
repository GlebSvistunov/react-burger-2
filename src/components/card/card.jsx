import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./card.module.css";

function Card ({data, setCurrentIngredient}) {
  return (
    <section className={styles.item} onClick={() => setCurrentIngredient(data)}>
      <img src={data.image} alt={'image'} />
      <div className={styles.price}>
        <span className="text text_type_digits-default m-1">{data.price}</span>
        <CurrencyIcon />
      </div>
      <div className={`${styles.name} text text_type_main-default`}>
        {data.name}
      </div>
    </section>
  );
};

export default Card;
