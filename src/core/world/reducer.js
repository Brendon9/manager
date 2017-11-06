import { GET_WORLD } from "./constants"

export const worldReducer = (state = null, action) => {
  switch (action.type) {
    case GET_WORLD:
      return action.payload;
    default:
      return state;
  }
}
