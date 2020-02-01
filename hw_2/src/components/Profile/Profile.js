import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({heandler}) => (
	<form style={wrapStyle} className="form-inline" onSubmit = {heandler}>
		<div className="form-group mx-sm-3 mb-2">
			<input className="form-control" id="userId" type="number" placeholder="Enter user's id"/>
		</div>
		<input type="submit" className="btn btn-primary mb-2" value="Submit"/>
	</form>
);

const wrapStyle = {
	width: '30%',
	margin: '0 auto'
}

Profile.propTypes = {
	heandler: PropTypes.func
}
export default Profile;