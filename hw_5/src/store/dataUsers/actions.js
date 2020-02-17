import { LOADING_ALBUMS, LOADING_IMAGES, CHANGE_ALBUM_ID } from '../types';

export const loadingAlbums = (albums) => ({type: LOADING_ALBUMS, payload: albums});
export const loadImages = (id, images) => ({type: LOADING_IMAGES, payload: images, albumId: id});
export const chnageHowAlbumImgShow = id => ({type: CHANGE_ALBUM_ID, payload: id});