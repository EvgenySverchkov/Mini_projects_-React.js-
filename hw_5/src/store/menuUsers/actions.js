import { LOADING_MENU, CHANGE_USER_ID, LOAD_USERS } from '../types';

export const loadingUsers = users => ({type: LOADING_MENU, payload: users});
export const chnageViewAlbumsUser = id => ({type: CHANGE_USER_ID, payload: id});

export const loadUsers = () => ({type: LOAD_USERS});

