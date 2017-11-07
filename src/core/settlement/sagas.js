import { call, put, takeLatest, select, fork, all } from 'redux-saga/effects'

import {
  SETTLEMENT_REQUESTED,
  SETTLEMENT_LIST_REQUESTED,
  SETTLEMENT_UPDATED
} from './constants'

import { settlementRequestSuccess, settlementListRequestSuccess } from './actions'
import { settlementGetApi, settlementIndexApi, settlementUpdateApi } from './api.js'

function* settlementRequestFlow(action) {
  try {
    const { id } = action
    const settlement = yield call(settlementGetApi, id)

    yield put(settlementRequestSuccess(settlement))

  } catch (error) {
    console.log(error)
  }
}

function* settlementListRequestFlow(action) {
  try {
    const settlements = yield call(settlementIndexApi)
    yield put(settlementListRequestSuccess(settlements))
  } catch (error) {
    console.log(error)
  }
}

function* settlementUpdateFlow(action) {
  try {
    const { id, payload } = action
    const settlement = yield call(settlementUpdateApi, id, payload)

    yield put(settlementRequestSuccess(settlement))
  } catch (error) {
    console.log(error)
  }
}


//=====================================
//  WATCHERS
//-------------------------------------

export function* settlementWatcher () {
  // each of the below RECEIVES the action from the .. action
  yield all([
    takeLatest(SETTLEMENT_REQUESTED, settlementRequestFlow),
    takeLatest(SETTLEMENT_LIST_REQUESTED, settlementListRequestFlow),
    takeLatest(SETTLEMENT_UPDATED, settlementUpdateFlow)
  ])
}

//=====================================
//  ROOT
//-------------------------------------

export const settlementSagas = [
  fork(settlementWatcher),
];
