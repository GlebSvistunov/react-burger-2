import { combineReducers } from "redux"
import { IngredientsReducer } from "./ingredients"
import { OrderReducer } from "./order"
import { CurrentIngredientReducer } from "./current-ingredient"
import { BurgerReducer } from "./burger"

export const rootReducer = combineReducers({
  ingredientsReducer: IngredientsReducer,
  burgerReducer: BurgerReducer,
  currentIngredientReducer: CurrentIngredientReducer,
  orderReducer: OrderReducer,
})
