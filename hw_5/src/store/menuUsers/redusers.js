import { LOADING_MENU, CHANGE_USER_ID } from './actions';

const defaultState = {
	users: [],
	viewAlbumsUser: undefined,
}

export const userMenuReducer = (state = defaultState, action)=>{
	switch(action.type){
		case LOADING_MENU: 
			return {
				...state, 
				users : action.payload,
			};
		case CHANGE_USER_ID: 
			return {
				...state, 
				viewAlbumsUser: action.payload
			};
		default:;
	}
	return state;
}