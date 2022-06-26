const BURGER_API_URL = "https://norma.nomoreparties.space/api/ingredients";

const getIngredients = () => {
  return fetch(BURGER_API_URL)
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) throw new Error("data has no success");
      return res.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export default getIngredients;
