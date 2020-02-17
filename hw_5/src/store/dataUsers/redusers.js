import { LOADING_ALBUMS, LOADING_IMAGES, CHANGE_ALBUM_ID } from '../types';

const defaultState = {
	albums: {},
	images: {},
	howAlbumImgsShow: undefined,
}

export const usersDataReducer = (state = defaultState, action)=>{
	switch (action.type){
		case LOADING_ALBUMS:
			return {
				...state, 
				albums: {...state.albums, ...action.payload}
			};
		case LOADING_IMAGES: 
			return {
				...state, 
				images: {...state.images, [`${action.albumId}`]: action.payload}
			};
		case CHANGE_ALBUM_ID: 
			return {
				...state, 
				howAlbumImgsShow: action.payload
			};
		default:;
	}
	return state;
}