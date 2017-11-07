import { all } from 'redux-saga/effects'

import { settlementSagas } from './settlement';

export default function* sagas() {
  yield all([
    ...settlementSagas,
  ]);
}
