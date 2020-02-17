import React from 'react';

import { connect } from 'react-redux';
import { loadingAlbums, chnageHowAlbumImgShow } from '../../store/dataUsers/actions';
import { chnageViewAlbumsUser } from '../../store/menuUsers/actions';

import getAlbums from '../../services/requestForData';
import { userAlbums } from '../../urls';

import MenuItem from './MenuItem';

class MenuItemContainer extends React.Component{
	constructor(props){
		super(props);
		this.handlerClick = this.handlerClick.bind(this);
	}
	componentDidMount(){
		const {userId, loadingAlbums} = this.props;

		getAlbums(userAlbums(userId))
			.then(data=>{
				loadingAlbums({[`${userId}`]: data})
			});
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
{ loadingAlbums, chnageViewAlbumsUser, chnageHowAlbumImgShow }
)(MenuItemContainer);