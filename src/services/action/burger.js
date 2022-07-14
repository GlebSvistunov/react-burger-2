import {
  BURGER_DROP_COMPONENT,
  BURGER_DROP_INGREDIENT,
  BURGER_DELETE_COMPONENT,
} from "."

export const dropIngredient = (ingredient) => (dispatch) => {
  dispatch({
    type: BURGER_DROP_INGREDIENT,
    ingredient: ingredient,
  })
}

export const dropComponent = (component) => (dispatch) => {
  dispatch({
    type: BURGER_DROP_COMPONENT,
    component: component,
  })
}

export const deleteComponent = (component) => (dispatch) => {
  dispatch({
    type: BURGER_DELETE_COMPONENT,
    component: component,
  })
}
