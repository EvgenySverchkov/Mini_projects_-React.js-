import React from 'react';
import PropTypes from 'prop-types';

const BackButton = ({backButtonHandler}) => <button type="button" className="btn btn-lg btn-primary" onClick = {backButtonHandler}>←</button>;

BackButton.propTypes = {
	backButtonHandler: PropTypes.func
}

export default BackButton;