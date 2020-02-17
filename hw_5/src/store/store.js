import { createStore, applyMiddleware } from 'redux';
import  rootReducer from './reducers';
import createSagaMiddelware from 'redux-saga';
import {watchLoadUsers} from './sagas.js';

const sagaMiddelware = createSagaMiddelware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddelware));
sagaMiddelware.run(watchLoadUsers);

export default store;