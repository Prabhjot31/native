export const LOAD_REQUEST = "LOAD_REQUEST";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAILURE = "LOAD_FAILURE";
export const SEND_REQUEST = "SEND_REQUEST";
import axios from 'axios';

 export const showList = () =>
 {
    return (dispatch, getState) => {
        dispatch({type:LOAD_REQUEST})
        axios
            .get(
                 `https://randomuser.me/api/?page=1 &results=15&seed=abc&inc=id,name,picture`,
            )
             .then((res) => {
                 const posts = res.data;
               dispatch({ type: LOAD_SUCCESS, payload: posts.results })
               console.log("api data", posts);
             })
             .catch(error => {
                 dispatch({ type: LOAD_FAILURE, payload: error })
                 console.log('error', error.message)
            });
     }
 }
