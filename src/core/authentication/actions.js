import axios from 'axios'

import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './constants'
import { GET_USER } from 'core/user'
import history from 'utils/history'

const KDM_API = `${process.env.REACT_APP_API_URL}`

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export const authenticate = ({ username, password }) => {
  return function(dispatch) {
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios
      .post(`${KDM_API}/login`, { username: username, password: password })
      .then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('userId', response.data._id)
        dispatch({ type: AUTH_USER })
        history.push('/settlements')
      })
      .catch(err => {
        console.log('Error:', err)
        dispatch(authError(true))
      })
  }
}

export const signoutUser = () => {
  localStorage.removeItem('access_token')
  return { type: UNAUTH_USER }
}
