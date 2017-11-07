import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { authenticationReducer } from './authentication'
import { homeReducer } from './home'
import { worldReducer } from './world'
import { settlementReducer } from './settlement'
import { userReducer } from './user'
import { survivorReducer } from './survivor'
import { headerReducer } from './header'

export default combineReducers({
  authenticated: authenticationReducer,
  homeData: homeReducer,
  worldData: worldReducer,
  settlement: settlementReducer,
  survivorData: survivorReducer,
  headerData: headerReducer,
  userData: userReducer,
  form: formReducer
})
