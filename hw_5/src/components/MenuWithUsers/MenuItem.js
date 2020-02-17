import React from 'react';

class MenuItem extends React.Component{
	render(){
		const {chnageViewAlbumsUser, children} = this.props;
		return (
		<li className="dropdown-item" 
			onClick={chnageViewAlbumsUser}>{children}</li>
		);
	}
};
export default MenuItem;
