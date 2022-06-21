import React, { useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {

  return (
    <div className={styles.App}>
      <AppHeader />
      <div className={styles.MainApp}>

      </div>
    </div>
  );
}


export default App;