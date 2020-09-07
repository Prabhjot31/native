import {combineReducers} from 'redux';
import friendsReducer from './friends';

export const RootReducer = combineReducers({
  friends: friendsReducer,
});
