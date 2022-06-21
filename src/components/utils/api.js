const BURGER_API = 'https://norma.nomoreparties.space/api/ingredients'

export const getIngredients = () => fetch(BURGER_API)
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    })
