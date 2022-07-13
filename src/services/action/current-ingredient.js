import { CURRENT_INGREDIENT_OPEN, CURRENT_INGREDIENT_CLOSE } from "."

export const openCurrentIngredient = (value) => {
  return (dispatch) => {
    console.log("open cur", value)
    dispatch({
      type: CURRENT_INGREDIENT_OPEN,
      value: value,
    })
  }
}

export const closeCurrentIngredient = () => {
  return (dispatch) => {
    dispatch({
      type: CURRENT_INGREDIENT_CLOSE,
      value: null,
    })
  }
}
