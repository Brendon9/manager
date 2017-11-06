import {
  GET_SETTLEMENT
} from 'core/settlement'

import {
  SET_MANY_ASSETS,
  SET_SURVIVAL,
  SET_ATTRIBUTES,
  SET_MANY_ARMOR,
  SET_MANY_ATTRIBUTES
} from "core/survivor"

const initialState = {
  user_assets: {
    players: {},
    survivors: {},
  }
}

export const settlementReducer = (state = initialState, action) => {
  let index, newSurvivors, settlement

  switch (action.type) {

    case GET_SETTLEMENT:
      return action.payload

    case SET_MANY_ASSETS:
      index = state.user_assets.survivors.map(el => el.sheet._id.$oid).indexOf(action.survivor_id)
      newSurvivors = state.user_assets.survivors
      newSurvivors[index] = action.payload
      return { ...state, user_assets: { players: state.user_assets.players, survivors: newSurvivors } }

    case SET_MANY_ARMOR:
      index = state.user_assets.survivors.map(el => el.sheet._id.$oid).indexOf(action.survivor_id)
      newSurvivors = state.user_assets.survivors
      for (var i = 0; i < action.payload.attributes.length; i++) {
        newSurvivors[index].sheet[action.payload.attributes[i].attribute] = action.payload.attributes[i].value
      }
      return {...state, user_assets: { players: state.user_assets.players, survivors: newSurvivors } }

    case SET_MANY_ATTRIBUTES:
      index = state.user_assets.survivors.map(el => el.sheet._id.$oid).indexOf(action.survivor_id)
      newSurvivors = state.user_assets.survivors
      for (var i = 0; i < action.payload.attributes.length; i++) {
        newSurvivors[index].sheet[action.payload.attributes[i].attribute] = action.payload.attributes[i].value
      }
      return {...state, user_assets: { players: state.user_assets.players, survivors: newSurvivors } }

    case SET_SURVIVAL:
      index = state.user_assets.survivors.map(el => el.sheet._id.$oid).indexOf(action.survivor_id)
      newSurvivors = state.user_assets.survivors
      newSurvivors[index].sheet.survival = action.payload.value
      return {...state, user_assets: { players: state.user_assets.players, survivors: newSurvivors } }

    case SET_ATTRIBUTES:
      index = state.user_assets.survivors.map(el => el.sheet._id.$oid).indexOf(action.survivor_id)
      newSurvivors = state.user_assets.survivors
      newSurvivors[index].sheet[action.payload.attribute] = action.payload.value
      return {...state, user_assets: { players: state.user_assets.players, survivors: newSurvivors } }

    default:
      return state
  }
}
