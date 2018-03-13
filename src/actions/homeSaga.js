import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_HOME_DATA_SUCCESS, FETCH_HOME_DATA } from './constants';
import getRencentMovies from '../service';


function* fetchMovie() {
  const movies = yield call(getRencentMovies);
  yield put({ type: FETCH_HOME_DATA_SUCCESS, payload: movies.subjects });
}

function* homeSaga() {
  yield takeEvery(FETCH_HOME_DATA, fetchMovie);
}

export default homeSaga;
