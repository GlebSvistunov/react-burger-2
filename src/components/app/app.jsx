import AppHeader from "../app-header/app-header";
import { useState } from "react";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientSection from "../burger-ingredients/ingredient-section/ingredient-section";
import data from "../utils/data";
import styles from "./app.module.css";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import OrderDetails from "./modal-windows/order-details/order-details";
import GeneralModal from "./modal-windows/general-modal/general-modal";
import IngredientDetails from "./modal-windows/ingredient-details/ingredient-details";

function App() {
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false);

  return (
    <div className={styles.App}>
      <AppHeader />
      <div
        style={{
          paddingTop: 40,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
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
          <BurgerConstructor
            ItemTop={data[0]}
            ItemMiddle={data.filter((item) => item.type !== "bun")}
            setOrderDetailsOpen={setOrderDetailsOpen}
          />
        </div>
      </div>
      <GeneralModal
        id="general-modal"
        isOpen={currentIngredient? true : false}
        setClose={()=> setCurrentIngredient(null)}
        title="Детали ингредиента"
        >
      <IngredientDetails currentIngredient={currentIngredient}
 />
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
