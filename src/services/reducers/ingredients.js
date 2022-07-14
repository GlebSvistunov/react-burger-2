import {
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
} from "../action"

const initialState = {
  ingredients: [],
  error: "",
}

export const ingredientsReducer = (state = initialState, action) => {
  //console.log("action", action);
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredients: [],
        loading: true,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        loading: false,
      }
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
