import React from 'react';

import './userAlbum.css';
 
class UserAlbum extends React.Component{
	render(){
		let {chnageHowAlbumImgShow, title} = this.props;
		return (
			<div className="album" onClick = {chnageHowAlbumImgShow}>
				<img src = {require('../imgs/folder.png')} alt='this is a folder'/>
				<div className='folderName'>{title}</div>
			</div>
		);
	}
}

export default UserAlbum;

