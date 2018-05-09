import axios from 'axios';
import { take, call, put, select, takeEvery } from 'redux-saga/effects';

const DEFAULT_LIMIT = 10;

// Individual exports for testing
export default function* watchFetchArticles() {
  // See example in containers/HomePage/saga.js
  // console.log('defaultSaga');
  yield takeEvery('API_REQUEST_ARTICLES', workerFetchArticles)
}

function* workerFetchArticles() {
  console.log('workerFetchArticles')
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles?limit=${DEFAULT_LIMIT}`
    })
    // console.log(response)
    yield put({type: 'FETCH_ARTICLES_SUCCESS', payload: response.data})
  } catch (error) {
    yield put({type: 'FETCH_ARTICLES_FAILURE', payload: error})
  }
}
