import { GET_HOME } from "./constants"

export const homeReducer = (state = null, action) => {
  switch (action.type) {
    case GET_HOME:
      return action.payload;
    default:
      return state;
  }
}
