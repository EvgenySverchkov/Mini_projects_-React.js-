import React from 'react';

const Profile = ({heandler}) => (
	
		<form style={wrapStyle} className="form-inline" onSubmit = {heandler}>
			<div className="form-group mx-sm-3 mb-2">
				<input className="form-control" id="userId" type="text" min="0" max="20" placeholder="Enter user's id"/>
			</div>
			<input type="submit" className="btn btn-primary mb-2" value="Submit"/>
		</form>

);

const wrapStyle = {
	width: '30%',
	margin: '0 auto'
}
export default Profile;