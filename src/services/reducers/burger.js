import {
  BURGER_DROP_COMPONENT,
  BURGER_DROP_INGREDIENT,
  BURGER_DELETE_COMPONENT,
} from "../action"

const initialState = {
  burger: {
    bun: null,
    components: [],
  },
}

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BURGER_DROP_INGREDIENT: {
      if (action.ingredient.type === "bun") {
        return {
          ...state,
          burger: {
            ...state.burger,
            bun: action.ingredient,
          },
        }
      } else {
        state.burger.components.push({
          uuid: Math.random(),
          ingredient: action.ingredient,
        })
        return state
      }
    }
    case BURGER_DROP_COMPONENT: {
      const components = [
        action.component,
        ...state.burger.components.filter(
          (c) => c.uuid !== action.component.uuid
        ),
      ]
      return {
        ...state,
        burger: {
          ...state.burger,
          components: components,
        },
      }
    }

    case BURGER_DELETE_COMPONENT: {
      const components = [
        ...state.burger.components.filter(
          (c) => c.uuid !== action.component.uuid
        ),
      ]
      return {
        ...state,
        burger: {
          ...state.burger,
          components: components,
        },
      }
    }
    default: {
      return state
    }
  }
}
