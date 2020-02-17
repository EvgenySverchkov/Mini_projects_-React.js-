import { combineReducers } from 'redux';
import { usersDataReducer } from './dataUsers/redusers';
import { userMenuReducer } from './menuUsers/redusers';

export default combineReducers({
	menuUsers: userMenuReducer,
	dataUsers: usersDataReducer
});
/*import {LOADING_MENU, LOADING_ALBUMS, CHANGE_USER_ID, LOADING_IMAGES, CHANGE_ALBUM_ID} from './types';

const inititalState = {
	users: [],
	albums: {},
	viewAlbumsUser: undefined,
	images: {},
	howAlbumImgsShow: undefined,
};

export const reducer = (state = inititalState, action)=>{
	switch(action.type){
		case LOADING_MENU: 
			return {
				...state, 
				users : [...state.users, action.payload]
			};

		case LOADING_ALBUMS: 
			return {
				...state, 
				albums: {...state.albums, [`${action.userId}`]: action.payload}
			};

		case CHANGE_USER_ID: 
			return {
				...state, 
				viewAlbumsUser: action.payload
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

		default: ;
	}
	return state;
}*/