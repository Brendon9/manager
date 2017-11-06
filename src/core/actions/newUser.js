import axios from "axios";
import { browserHistory } from "react-router";

const KDM_API = `${process.env.REACT_APP_API_URL}`

export function newUser(data) {
  return axios({
    method: "post",
    url: `${KDM_API}/new/user`,
    data: data
  });
}
