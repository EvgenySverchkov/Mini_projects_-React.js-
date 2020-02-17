import React from 'react';

import MenuItemContainer from './MenuItemContainer';

class MenuWithUsers extends React.Component{
	render(){
		const {menuState, clickHander} = this.props;
		return (
		<div id="userMenu" className="menu dropdown">
			<button className="btn btn-secondary dropdown-toggle title"
					type="button"
					id="dropdownMenu2"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					onClick={clickHander}>Menu with users</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
			{
				menuState.map((item, idx)=><MenuItemContainer key={idx+1} 
													 		  userId={item.id}>{item.name}</MenuItemContainer>)
			}
			</ul>
		</div>
	);
	}
};

export default MenuWithUsers;