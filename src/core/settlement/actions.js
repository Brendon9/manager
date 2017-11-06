import axios from "axios"
import { GET_SETTLEMENT } from "./constants"
import history from "utils/history"

const KDM_API = `${process.env.REACT_APP_API_URL}`

axios.defaults.headers.common["Content-Type"] = "application/json"

const getSettlementAsync = (data) => {
  return {
    type: GET_SETTLEMENT,
    payload: data
  }
}

export const getSettlement = (id) => {
  return dispatch => {
    dispatch(getSettlementAsync(null))
    const auth = localStorage.getItem("access_token")
    axios({
      headers: { Authorization: auth },
      method: "get",
      url: `${KDM_API}/settlement/get/${id}`
    }).then(res => {
      console.log("SETTLEMENT", res)
      dispatch(getSettlementAsync(res.data))
    })
  }
}

// create call
export const createSettlement = (data) => {
  return dispatch => {
    axios({
      method: "post",
      url: `${KDM_API}/new/settlement`,
      data: data
    }).then(res => {
      console.log("CREATE", res)
      history.goBack()
    })
  }
}

//update call
export const updateSettlement = () => {
  return dispatch => {
    let userId = localStorage.getItem("userId")
    axios({
      method: "post",
      url: `${KDM_API}/settlement/set_attribute/59c511da8740d90655610336`,
      data: {
        user_id: userId,
        attribute: "survival_limit", value: 3
      }
    }).then(res => {
      console.log("UPDATE", res)
    })
  }
}
