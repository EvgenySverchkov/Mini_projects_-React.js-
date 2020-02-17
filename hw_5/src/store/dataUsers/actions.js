export const LOADING_ALBUMS_OBJ = 'LOADING_ALBUMS_OBJ';
export const LOADING_IMAGES_OBJ = 'LOADING_IMAGES_OBJ';
export const CHANGE_ALBUM_ID = 'CHANGE_ALBUM_ID';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const LOAD_IMAGES = 'LOAD_IMAGES';

export const loadAlbumsObj = (albums) => ({type: LOADING_ALBUMS_OBJ, payload: albums});
export const loadImagesObj = (id, images, isFetching) => ({type: LOADING_IMAGES_OBJ, payload: images, albumId: id});
export const chnageHowAlbumImgShow = id => ({type: CHANGE_ALBUM_ID, payload: id});
export const loadAlbums = (userId) => ({type: LOAD_ALBUMS, userId: userId});
export const loadImages = (albumId) => {return {type: LOAD_IMAGES, albumId:albumId}};