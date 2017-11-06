import axios from "axios"
import { GET_SETTLEMENT } from "./constants"
import history from "utils/history"

const KDM_API = `${process.env.REACT_APP_API_URL}`

axios.defaults.headers.common["Content-Type"] = "application/json"

const getSettlementAsync = (data) => ({
  type: GET_SETTLEMENT,
  payload: data
})

export const getSettlement = (id) => {
  return dispatch => {
    dispatch(getSettlementAsync({}))
    axios({
      method: 'GET',
      url: `${KDM_API}/settlements/${id}`
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
      method: 'POST',
      url: `${KDM_API}/settlements`,
      data: data
    }).then(res => {
      console.log("CREATE", res)
      history.goBack()
    })
  }
}

//update call
export const updateSettlement = (id) => {
  return dispatch => {
    axios({
      method: "PUT",
      url: `${KDM_API}/settlements/${id}`,
      data: {
        survival_limit: 3
      }
    }).then(res => {
      console.log("UPDATE", res)
    })
  }
}
