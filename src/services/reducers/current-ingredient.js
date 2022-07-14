import { CURRENT_INGREDIENT_OPEN, CURRENT_INGREDIENT_CLOSE } from "../action"

const initialState = {
  value: null,
}

export const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_INGREDIENT_OPEN: {
      return {
        ...state,
        value: action.value,
      }
    }
    case CURRENT_INGREDIENT_CLOSE: {
      return {
        ...state,
        value: null,
      }
    }
    default: {
      return state
    }
  }
}
