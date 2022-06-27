const BURGER_API_URL = "https://norma.nomoreparties.space/api/ingredients";

const getIngredients = () => {
  return fetch(BURGER_API_URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((data) => data.data);
};

export default getIngredients;
