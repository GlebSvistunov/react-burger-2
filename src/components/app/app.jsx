import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import GeneralModal from "./modal-windows/general-modal/general-modal";
import getIngredients from "../utils/api";
import IngredientDetails from "./modal-windows/ingredient-details/ingredient-details";
import IngredientSection from "../burger-ingredients/ingredient-section/ingredient-section";
import OrderDetails from "./modal-windows/order-details/order-details";
import styles from "./app.module.css";

function App() {
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getIngredients().then(setData);
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      <div
        style={{
          paddingTop: 40,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          // justifyContent: "center",
        }}
      >
        <div>
          <BurgerIngredients />

          <IngredientSection
            title="Булки"
            items={data.filter((item) => item.type === "bun")}
            setCurrentIngredient={setCurrentIngredient}
          />
          <IngredientSection
            title="Соусы"
            items={data.filter((item) => item.type === "sauce")}
            setCurrentIngredient={setCurrentIngredient}
          />

          <IngredientSection
            title="Начинки"
            items={data.filter((item) => item.type === "main")}
            setCurrentIngredient={setCurrentIngredient}
          />
        </div>
        <div style={{ paddingTop: 65 }}>
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
  );
}

export default App;
