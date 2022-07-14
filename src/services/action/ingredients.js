import { getIngredientsRequest } from "../../components/utils/api"
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "."

//export function getIngredients(dispatch) {
export const getIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  })
  getIngredientsRequest()
    .then((res) => {
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
    .catch(console.error)
}
