import { fork } from 'redux-saga/effects'

import init from './init';

// Consider using takeEvery
export default function* root() {
  yield fork(init);
}
