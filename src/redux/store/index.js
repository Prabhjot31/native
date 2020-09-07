import {createStore,applyMiddleware} from 'redux';
import {RootReducer} from '../reducers';
//import { createSagaMiddleware } from 'redux-saga';
import thunk  from 'redux-thunk';
//import rootSaga from '../../sagas/rootSaga';
//const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RootReducer, applyMiddleware(thunk));

//sagaMiddleware.run(rootSaga);

