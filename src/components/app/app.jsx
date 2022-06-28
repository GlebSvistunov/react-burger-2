import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import GeneralModal from "./modal-windows/general-modal/general-modal";
import getIngredients from "../utils/api";
import IngredientDetails from "./modal-windows/ingredient-details/ingredient-details";
// import IngredientSection from "../burger-ingredients/ingredient-section/ingredient-section";
import OrderDetails from "./modal-windows/order-details/order-details";
import styles from "./app.module.css";

function App() {
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getIngredients()
      .then(setData)
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.App}>
        <AppHeader />
        <div className={styles.appContent}>
          <div>
            <BurgerIngredients
              items={data}
              setCurrentIngredient={setCurrentIngredient}
            />
          </div>
          <div>
            {data.length > 0 && (
              <BurgerConstructor
                key={data[0]._id}
                itemTop={data[0]}
                itemsMiddle={data.filter((item) => item.type !== "bun")}
                setOrderDetailsOpen={setOrderDetailsOpen}
              />
            )}
          </div>
        </div>
        <GeneralModal
          id="general-modal"
          isOpen={!!currentIngredient}
          setClose={() => setCurrentIngredient(null)}
          title="Детали ингредиента"
        >
          <IngredientDetails currentIngredient={currentIngredient} />
        </GeneralModal>

        <GeneralModal
          id="general-modal"
          isOpen={isOrderDetailsOpen}
          setClose={() => setOrderDetailsOpen(false)}
        >
          <OrderDetails />
        </GeneralModal>
      </div>
    </div>
  );
}

export default App;
