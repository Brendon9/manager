import { GET_USER } from "./constants";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
