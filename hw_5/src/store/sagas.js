import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_USERS } from './types';
import getUsers from '../services/requestForData';
import {loadingUsers} from './menuUsers/actions';
import {allUsers} from '../urls.js'


function fetchData(){
	return getUsers(allUsers)
}
function* workerLoadUsers(){
	const data = yield call(fetchData);
	yield put(loadingUsers(data));
}

export function* watchLoadUsers(){
	yield takeEvery(LOAD_USERS, workerLoadUsers);
}
