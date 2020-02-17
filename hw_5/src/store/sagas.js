import { takeEvery, put, call } from 'redux-saga/effects';
import getData from '../services/requestForData';
import { loadingUsers, LOAD_USERS } from './menuUsers/actions';
import { loadAlbumsObj, loadImagesObj, LOAD_ALBUMS, LOAD_IMAGES } from './dataUsers/actions';
import { allUsers, userAlbums, albumPhotos } from '../urls.js';

function fetchImagesData(albumId){
	return getData(albumPhotos(albumId));
}

function* workerLoadImages(albumId){
	const data = yield call(fetchImagesData, albumId.albumId);
	yield put(loadImagesObj(albumId.albumId ,data));
}

function fetchAlbumsData(userId){
	return getData(userAlbums(userId)).then(data=>data);
}

function* workerLoadAlbums(userId){
	const data = yield call(fetchAlbumsData, userId.userId);
	yield put(loadAlbumsObj({[`${userId.userId}`]: data}));
}

function fetchUsersData(){
	return getData(allUsers);
}

function* workerLoadUsers(){
	const dataObj = yield call(fetchUsersData);
	yield put(loadingUsers(dataObj));
}

export function* watchLoadUsers(){
	yield takeEvery(LOAD_USERS, workerLoadUsers);
	yield takeEvery(LOAD_ALBUMS, workerLoadAlbums);
	yield takeEvery(LOAD_IMAGES, workerLoadImages);
}
