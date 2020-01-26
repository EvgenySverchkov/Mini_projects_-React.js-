import React from "react";
import PropTypes from 'prop-types';

import "./greetingsBackButton.css";

const BackButton = ({handler}) => <span className="back-button" onClick = {handler}>←</span>;

BackButton.propTypes = {
	handler: PropTypes.func
}

export default BackButton;