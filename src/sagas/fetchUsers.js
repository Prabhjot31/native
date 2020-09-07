import { LOAD_REQUEST, LOAD_FAILURE, LOAD_SUCCESS } from '../redux/actions';
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';


function* addFriend()
{
  axios.get(`https://randomuser.me/api/?page=1 &results=5 &inc=id,name`)
      .then((res) => {
        const posts = res.data;
        yield put({type: "LOAD_SUCCESS", payload: posts.results});
        console.log('api data', posts);
      })
      .catch((error) => {
      yield put({type: "LOAD_FAILURE", payload: error});
        console.log('error', error.message);
      });
}


 export function* watchAddFriend() {
   yield takeLatest("LOAD_REQUEST", addFriend);
  };



