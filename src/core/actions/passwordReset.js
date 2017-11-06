import axios from "axios";
import { browserHistory } from "react-router";

const KDM_API = `${process.env.REACT_APP_API_URL}`

export function passwordReset(data) {
  return axios({
    method: "post",
    url: `${KDM_API}/reset_password/request_code`,
    data: data
  });
}
