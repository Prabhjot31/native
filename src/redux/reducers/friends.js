import { LOAD_REQUEST,LOAD_FAILURE,LOAD_SUCCESS} from '../actions';

const initialState = {
  error: null,
  loading:false,
  friends: [],
  requestedFriends:[]
};

const friendsReducer = (state = { ...initialState }, action) =>
{
  const data = action.payload;
  
  switch (action.type)
  {
    case LOAD_REQUEST: {
      return {
        ...state,
        loading:true
      }
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        friends:action.payload
      }
    }
    case LOAD_FAILURE: {
      return {
        ...state,
        loading: false,
        error:action.payload
      }
      }
   
     default: {
      return {
        ...state,
      };
      }
  }
}
export default friendsReducer;