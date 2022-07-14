import { ORDER_CLOSE, ORDER_OPEN, ORDER_ERROR, ORDER_SUCCESS } from "../action"

const initialState = {
  order: null,
  error: "",
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CLOSE: {
      return {
        ...state,
        order: null,
      }
    }
    case ORDER_OPEN: {
      return {
        ...state,
        order: [...action.items],
      }
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        number: action.number,
      }
    }
    case ORDER_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    default: {
      return state
    }
  }
}
