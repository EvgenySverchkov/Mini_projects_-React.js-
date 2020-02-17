import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { loadingUsers, loadUsers } from '../../store/menuUsers/actions';
//import getUsers from '../../services/requestForData';
import { allUsers } from '../../urls';

import MenuWithUsers from './MenuWithUsers';

class MenuContainer extends React.Component{
	componentDidMount(){
		this.props.loadUsers();
		/*getUsers(allUsers)
			.then(data=>data.map((item)=>this.props.loadingUsers(item)));*/
			console.log(this.props.menuState);
	}

	clickHander(){
		let menuElem = document.getElementById('userMenu');
		menuElem.classList.toggle('open');
	}

	render(){
		return <MenuWithUsers menuState = {this.props.menuState} 
							  clickHander={this.clickHander}/>;
	}
}

export default connect(
state=>({
	menuState: state.menuUsers.users,
}),
{loadingUsers, loadUsers})(MenuContainer); 