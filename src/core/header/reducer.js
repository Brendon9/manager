import { UPDATE_HEADER, CLOSE_HEADER } from "./constants";

export const headerReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_HEADER:
      return { ...state, showNav: true };
    case CLOSE_HEADER:
      return { ...state, showNav: false };
    default:
      return state;
  }
  return state;
}
