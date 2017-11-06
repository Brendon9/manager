import { UPDATE_HEADER, CLOSE_HEADER } from './constants'

export const updateHeader = () => {
  return dispatch => {
    dispatch({
      type: UPDATE_HEADER
    });
  };
}

export const closeHeader = () => {
  return dispatch => {
    dispatch({
      type: CLOSE_HEADER
    });
  };
}
