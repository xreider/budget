import { delay, take, put, call, fork } from 'redux-saga/effects';

export function* double(number) {
  return number * 2;
}

export function* testSaga() {
  while (true) {
    console.log('Starting saga');
    const state = yield take('TEST_MESSAGE');
    const a = yield call(double, 2);
    console.log(a);
    const b = yield double(3);
    console.log(b);
    console.log('Finish saga function', state);
  }
}

function* doNothing() {
  console.log('I have been called'); // it is being logged three times
  yield delay(1000);
  console.log('I am doing nothing'); // it is being logged three times
}

export function* testSagaFork() {
  while (true) {
    yield take('TEST_MESSAGE_2');
    yield delay(1000);
    // yield fork(doNothing); // parallel
    // yield fork(doNothing); // parallel
    // yield fork(doNothing); // parallel
    yield call(doNothing); // wait for the result
    yield call(doNothing); // wait for the result
    yield call(doNothing); // wait for the result
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(5000);
    yield put({ type: 'TEST_MESSAGE_2', payload: 1000 });
  }
}

// export function* count() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }
