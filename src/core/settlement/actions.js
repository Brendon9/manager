import axios from "axios"
import {
  SETTLEMENT_REQUESTED, SETTLEMENT_REQUEST_SUCCESS,
  SETTLEMENT_LIST_REQUESTED, SETTLEMENT_LIST_REQUEST_SUCCESS,
  SETTLEMENT_UPDATED
} from "./constants"
import history from "utils/history"

const KDM_API = `${process.env.REACT_APP_API_URL}`

axios.defaults.headers.common["Content-Type"] = "application/json"

export const updateSettlement = (id, values) => ({
  type: SETTLEMENT_UPDATED,
  id,
  payload: values,
})

export const getSettlement = (id) => ({
  type: SETTLEMENT_REQUESTED,
  id
})

export const settlementRequestSuccess = (settlement) => ({
  type: SETTLEMENT_REQUEST_SUCCESS,
  settlement
})

export const getSettlementList = () => ({
  type: SETTLEMENT_LIST_REQUESTED
})

export const settlementListRequestSuccess = (settlements) => ({
  type: SETTLEMENT_LIST_REQUEST_SUCCESS,
  settlements
})

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

// //update call
// export const updateSettlement = (id) => {
//   return dispatch => {
//     axios({
//       method: "PUT",
//       url: `${KDM_API}/settlements/${id}`,
//       data: {
//         survival_limit: 3
//       }
//     }).then(res => {
//       console.log("UPDATE", res)
//     })
//   }
// }
