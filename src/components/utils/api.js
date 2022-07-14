const API_URL = "https://norma.nomoreparties.space/api"
const BURGER_API_URL = `${API_URL}/ingredients`
const ORDER_API_URL = `${API_URL}/orders`

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
}
export const getIngredientsRequest = () => {
  return fetch(BURGER_API_URL).then(checkResponse)
}

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

  return fetch(ORDER_API_URL, requestOptions).then(checkResponse)
}
