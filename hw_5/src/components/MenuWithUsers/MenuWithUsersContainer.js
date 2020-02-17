import React from 'react';
import { connect } from 'react-redux';

import { loadingUsers, loadUsers } from '../../store/menuUsers/actions';
import MenuWithUsers from './MenuWithUsers';

class MenuContainer extends React.Component{
	componentDidMount(){
		this.props.loadUsers();
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