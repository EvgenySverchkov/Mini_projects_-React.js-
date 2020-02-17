import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import MenuWithUsers from './components/MenuWithUsers';
import Albums from './components/UserAlbumContainer.js';
import Img from './components/UserImage.js';

function App(props) {
	function screens(){
		if(props.viewAlbumsUser && !props.imgsFromAlbumNumber){
			return props.albumState[props.viewAlbumsUser].map((item)=><Albums key={item.id} 
																			  title={item.title}
																			  albumId = {item.id}
																			  userId = {item.userId}/>);
		}else if(props.imgsFromAlbumNumber){
			return props.imgs[props.imgsFromAlbumNumber].map(item=><Img key={item.id} 
																 url={item.thumbnailUrl}/>);
		}else if(props.isFetching){
			return <div>...Loading</div>
		}
	}
	return (
	<>
		<div className = 'menuWrapper'>
			<MenuWithUsers />
		</div>
		<div className = 'folderAndImgsWrapper'>
			<div className = 'listWrapper'>{screens()}</div>
		</div>	
	</>
	);
}


function mapStateToProps(state) {
  return {
  	users: state.menuUsers.users,
  	albumState: state.dataUsers.albums,
  	viewAlbumsUser: state.menuUsers.viewAlbumsUser,
  	imgs: state.dataUsers.images,
  	imgsFromAlbumNumber: state.dataUsers.imgsFromAlbumNumber,
  };
}

export default connect(mapStateToProps)(App);