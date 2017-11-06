import axios from "axios";
import { GET_USER } from "./constants";

const KDM_API = `${process.env.REACT_APP_API_URL}`

axios.defaults.headers.common["Content-Type"] = "application/json";

const getUserAsync = (data) => {
  return {
    type: GET_USER,
    payload: data
  };
}

export const getUser = () => {
  return dispatch => {
    let auth = localStorage.getItem("access_token");
    let userId = localStorage.getItem("userId");
    axios({
      headers: { Authorization: auth },
      method: "get",
      url: `${KDM_API}/user/dashboard/${userId}`
    }).then(res => {
      dispatch(getUserAsync(res.data));
    });
  };
}

export const setCurrentSettlement = (id) => {
  const auth = localStorage.getItem("access_token");
  const userId = localStorage.getItem("userId");
  const data = { current_settlement: id };
  return axios({
    headers: { Authorization: auth },
    method: "post",
    url: `${KDM_API}/user/set/${userId}`,
    data
  });
}
