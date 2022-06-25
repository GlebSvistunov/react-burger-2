import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

function BurgerConstructor ({ ItemTop, ItemMiddle, setOrderDetailsOpen })  {
  return (
    <section className={styles.AllElements}>
      <div className={styles.AllElements}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${ItemTop.name} (верх)`}
          price={ItemTop.price}
          thumbnail={ItemTop.image_mobile}
        />
        <ul className={styles.ItemMiddle}>
          {ItemMiddle.map((ItemMiddle) => {
            return (
              <li className={styles.Item}>
                <DragIcon />
                <ConstructorElement
                  text={ItemMiddle.name}
                  price={ItemMiddle.price}
                  thumbnail={ItemMiddle.image_mobile}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles.Item}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ItemTop.name} (низ)`}
            price={ItemTop.price}
            thumbnail={ItemTop.image_mobile}
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
};

export default BurgerConstructor;
