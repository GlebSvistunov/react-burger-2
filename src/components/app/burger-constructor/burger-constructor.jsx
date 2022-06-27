import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import BurgerItemType from "../../utils/prop-types/prop-types";

function BurgerConstructor({ itemTop, itemsMiddle, setOrderDetailsOpen }) {
  if (!itemTop) {
    return;
  }
  return (
    <section className={styles.AllElements}>
      <div className={styles.AllElements}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${itemTop.name} (верх)`}
          price={itemTop.price}
          thumbnail={itemTop.image_mobile}
        />
        <ul className={styles.ItemMiddle}>
          {itemsMiddle.map((itemMiddle) => {
            return (
              <li className={styles.Item} key={Math.random()}>
                <DragIcon />
                <ConstructorElement
                  text={itemMiddle.name}
                  price={itemMiddle.price}
                  thumbnail={itemMiddle.image_mobile}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles.Item}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${itemTop.name} (низ)`}
            price={itemTop.price}
            thumbnail={itemTop.image_mobile}
          />
        </div>
        <div className={styles.InTotal}>
          <span
            style={{ marginRight: 25 }}
            className="text text_type_digits-medium m-2"
          >
            610
            <CurrencyIcon />
          </span>
          <Button
            type="primary"
            size="medium"
            onClick={() => {
              setOrderDetailsOpen(true);
            }}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  itemTop: PropTypes.shape(BurgerItemType),
  itemsMiddle: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)),
  setOrderDetailsOpen: PropTypes.func.isRequired,
};

export default BurgerConstructor;
