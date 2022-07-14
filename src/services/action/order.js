import { ORDER_CLOSE, ORDER_OPEN, ORDER_SUCCESS, ORDER_ERROR } from "."
import { getOrderRequest } from "../../components/utils/api"

export const postOrder = (order) => (dispatch) => {
  return getOrderRequest(order)
    .then((res) => {
      return res && res.success
        ? dispatch({
            type: ORDER_SUCCESS,
            number: res.order.number,
          })
        : dispatch({
            type: ORDER_ERROR,
            error: "aaa!",
          })
    })
    .catch(console.error)
}

export const openOrder = (items) => (dispatch) => {
  dispatch({
    type: ORDER_OPEN,
    items: items,
  })
  setTimeout(() => dispatch(postOrder(items))) // fake wait
}

export const closeOrder = () => (dispatch) => {
  dispatch({
    type: ORDER_CLOSE,
  })
}
