import { LOADING_ALBUMS_OBJ, LOADING_IMAGES_OBJ, CHANGE_ALBUM_ID } from './actions';

const defaultState = {
	albums: {},
	images: {},
	imgsFromAlbumNumber: undefined,
}

export const usersDataReducer = (state = defaultState, action)=>{
	switch (action.type){
		case LOADING_ALBUMS_OBJ:
			return {
				...state, 
				albums: {...state.albums, ...action.payload}
			};
		case LOADING_IMAGES_OBJ:
			return {
				...state, 
				images: {...state.images, [`${action.albumId}`]: action.payload},
			};
		case CHANGE_ALBUM_ID: 
			return {
				...state, 
				imgsFromAlbumNumber: action.payload
			};
		default:;
	}
	return state;
}