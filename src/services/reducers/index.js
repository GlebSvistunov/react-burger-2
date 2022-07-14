import { combineReducers } from "redux"
import { ingredientsReducer } from "./ingredients"
import { orderReducer } from "./order"
import { currentIngredientReducer } from "./current-ingredient"
import { burgerReducer } from "./burger"

export const rootReducer = combineReducers({
  ingredientsReducer,
  burgerReducer,
  currentIngredientReducer,
  orderReducer,
})
