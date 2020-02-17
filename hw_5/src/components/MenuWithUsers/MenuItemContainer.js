import React from 'react';

import { connect } from 'react-redux';
import { chnageHowAlbumImgShow, loadAlbums } from '../../store/dataUsers/actions';
import { chnageViewAlbumsUser } from '../../store/menuUsers/actions';

import MenuItem from './MenuItem';

class MenuItemContainer extends React.Component{
	constructor(props){
		super(props);
		this.handlerClick = this.handlerClick.bind(this);
	}
	
	componentDidMount(){
		const {userId, loadAlbums} = this.props;
		loadAlbums(userId);
	}

	handlerClick(){
		this.props.chnageHowAlbumImgShow(undefined);
		this.props.chnageViewAlbumsUser(this.props.userId);
	}
	render(){
		const {userId, children} = this.props;
		return <MenuItem chnageViewAlbumsUser = {this.handlerClick}
						 userId = {userId}
						 children = {children}/>
	}
}

export default connect(
null,
{ chnageViewAlbumsUser, chnageHowAlbumImgShow, loadAlbums }
)(MenuItemContainer);