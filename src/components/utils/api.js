const API_URL = "https://norma.nomoreparties.space/api"
const BURGER_API_URL = `${API_URL}/ingredients`
const ORDER_API_URL = `${API_URL}/orders`

export const getIngredientsRequest = () => {
  return fetch(BURGER_API_URL)
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
    )
    .then((res) => res)
}

// export const getOrder = (burgers) => {
//   return dispatch => {
//       const requestOptions = {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ ingredients: [...burgers.filter(item => item._id)] }),
//       };
//       fetch(`${API_BURGERS}/orders`, requestOptions)
//           .then((response) => checkResponse(response))
//           .then((data) => data.success ? dispatch({type: GET_ORDER_SUCCESSFUL,number: data.order.number}) : '')
//           .catch((error) => {
//               dispatch({
//                   type: GET_ORDER_ERROR,
//                   err: error.message,
//               })
//               alert("Ошибка HTTP: " + error.message);
//           });
//   }
// }

export const getOrderRequest = (order) => {
  console.log("getOrderReq", order)
  const ids = [...order.map((item) => item._id)]

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: [...ids],
    }),
  }

  return fetch(ORDER_API_URL, requestOptions)
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
    )
    .then((res) => res)
}
