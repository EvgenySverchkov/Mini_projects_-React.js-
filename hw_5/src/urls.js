export const allUsers = 'https://jsonplaceholder.typicode.com/users';
export const userAlbums = (userId) => `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
export const albumPhotos = (albumId) => `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;