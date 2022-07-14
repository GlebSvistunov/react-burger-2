import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./burger-constructor.module.css"
import PropTypes from "prop-types"
import { useDrop } from "react-dnd"
import {
  DND_BURGER_TYPE,
  DND_COMPONENT,
  DND_INGREDIENT,
} from "../../services/constants/dnd-items"
import { dropComponent, dropIngredient } from "../../services/action/burger"
import { useDispatch } from "react-redux"
import { BurgerComponent } from "./burger-component/burger-component"
import { openOrder } from "../../services/action/order"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

export const BurgerConstructor = () => {
  const dispatch = useDispatch()
  const burger = useSelector((store) => store.burgerReducer.burger)
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DND_BURGER_TYPE,
    drop: (item) => {
      // console.log("drop", item)
      switch (item.type) {
        case DND_INGREDIENT: {
          dispatch(dropIngredient(item.item))
          break
        }
        case DND_COMPONENT: {
          dispatch(dropComponent(item.item))
          break
        }
        default: {
        }
      }
      return
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const canCalculateOrder = !!burger?.bun ?? false
  const total = canCalculateOrder
    ? burger.components.reduce((acc, x) => acc + x.ingredient.price, 0) +
      burger.bun.price * 2
    : "Need bun"

  return (
    <section className={styles.AllElements}>
      <div ref={drop} className={styles.AllElements}>
        {!!burger?.bun && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${burger.bun.name} (верх)`}
            price={burger.bun.price}
            thumbnail={burger.bun.image_mobile}
          />
        )}
        <ul className={styles.ItemMiddle}>
          {!burger?.components?.length ? (
            <div className={styles.Nothing}>
              <p>Nothing</p>
              <p>Drag&Drop something here</p>
            </div>
          ) : (
            burger.components.map((component) => {
              return (
                <BurgerComponent key={component.uuid} component={component} />
              )
            })
          )}
        </ul>
        <div className={styles.Item}>
          {!!burger?.bun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${burger.bun.name} (низ)`}
              price={burger.bun.price}
              thumbnail={burger.bun.image_mobile}
            />
          )}
        </div>
        <div className={styles.InTotal}>
          <span
            style={{ marginRight: 25 }}
            className="text text_type_digits-medium m-2"
          >
            {total}
            {canCalculateOrder && <CurrencyIcon />}
          </span>
          <Button
            type="primary"
            size="medium"
            disabled={
              !!burger?.bun && !!burger?.components?.length ? false : true
            }
            onClick={() =>
              dispatch(
                openOrder([
                  burger.bun,
                  ...burger.components.map((c) => c.ingredient),
                ])
              )
            }
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  burger: PropTypes.any,
}

export default BurgerConstructor
