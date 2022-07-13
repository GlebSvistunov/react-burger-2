import { getIngredientsRequest } from "../../components/utils/api"
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "."

export function getIngredients(dispatch) {
  //console.log("dispatch");

  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  })
  return getIngredientsRequest().then((res) => {
    console.log("res", res)
    return res && res.success
      ? dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data,
        })
      : dispatch({
          type: GET_INGREDIENTS_ERROR,
        })
  })
}
