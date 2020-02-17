export const LOADING_MENU = 'LOADING_MENU';
export const CHANGE_USER_ID = 'CHANGE_USER_ID';
export const LOAD_USERS = 'LOAD_USERS';

export const loadingUsers = users => ({type: LOADING_MENU, payload: users});
export const chnageViewAlbumsUser = id => ({type: CHANGE_USER_ID, payload: id});
export const loadUsers = () => ({type: LOAD_USERS});


