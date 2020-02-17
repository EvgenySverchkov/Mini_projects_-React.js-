import React from 'react';
import { connect } from 'react-redux';

import { chnageHowAlbumImgShow, loadImages } from '../store/dataUsers/actions';

import UserAlbum from './UserAlbum';

class UserAlbumContainer extends React.Component{
	constructor(props){
		super(props);
		this.handlerClick = this.handlerClick.bind(this);
	}
	componentDidMount(){
		const {loadImages, albumId} = this.props;
		loadImages(albumId);
	}
	handlerClick(){
		this.props.chnageHowAlbumImgShow(this.props.albumId);
	}
	render(){
		let {albumId, title} = this.props;
		return <UserAlbum chnageHowAlbumImgShow={this.handlerClick}
						  albumId = {albumId}
						  title = {title}/>
	}
}

function mapStateToProps(state) {
	return {
		imgs: state.dataUsers.images
	};
}

export default connect(mapStateToProps, {loadImages, chnageHowAlbumImgShow})(UserAlbumContainer);