import { useEffect } from "react"
import AppHeader from "../app-header/app-header"
import BurgerConstructor from "../burger-constructor/burger-constructor"
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import GeneralModal from "./modal-windows/general-modal/general-modal"
import { getIngredients } from "../../services/action/ingredients"
import IngredientDetails from "./modal-windows/ingredient-details/ingredient-details"
import OrderDetails from "./modal-windows/order-details/order-details"
import styles from "./app.module.css"
import { useDispatch, useSelector } from "react-redux"
import { closeCurrentIngredient } from "../../services/action/current-ingredient"
import { closeOrder } from "../../services/action/order"

function App() {
  const dispatch = useDispatch()
  const currentIngredient = useSelector(
    (store) => store.currentIngredientReducer.value
  )
  const order = useSelector((store) => store.orderReducer.order)

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <div className={styles.page}>
      <div className={styles.App}>
        <AppHeader />
        <div className={styles.appContent}>
          <div>
            <BurgerIngredients />
          </div>
          <div>
            <BurgerConstructor />
          </div>
        </div>
        <GeneralModal
          id="general-modal"
          isOpen={!!currentIngredient}
          setClose={() => dispatch(closeCurrentIngredient())}
          title="Детали ингредиента"
        >
          <IngredientDetails />
        </GeneralModal>

        <GeneralModal
          id="general-modal"
          isOpen={!!order}
          setClose={() => dispatch(closeOrder())}
        >
          <OrderDetails />
        </GeneralModal>
      </div>
    </div>
  )
}

export default App
