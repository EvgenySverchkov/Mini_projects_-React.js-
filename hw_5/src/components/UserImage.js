import React from 'react';

import './userImage.css';

class UserImage extends React.Component{
	render(){
		return (
			<div className = 'imagePost'>
				<img src = {`${this.props.url}`} alt=''/>
			</div>);
	}
}

export default UserImage;