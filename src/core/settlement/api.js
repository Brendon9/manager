import axios from 'axios'

const KDM_API = `${process.env.REACT_APP_API_URL}`

axios.defaults.headers.common["Content-Type"] = "application/json"

export const settlementGetApi = (id) => {
  return axios({
    url: `${KDM_API}/settlements/${id}`,
    method: 'GET'
  }).then(res => res.data)
}

export const settlementUpdateApi = (id, values) => {
  return axios({
    url: `${KDM_API}/settlements/${id}`,
    method: 'PATCH',
    data: values
  }).then(res => res.data)
}

export const settlementIndexApi = () => {
  return axios({
    url: `${KDM_API}/settlements`,
    method: 'GET'
  }).then(res => res.data)
}
