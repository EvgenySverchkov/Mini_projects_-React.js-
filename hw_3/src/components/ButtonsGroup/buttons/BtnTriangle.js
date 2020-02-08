import React from 'react';
import PropTypes from 'prop-types';

const BtnTriangle = ({triangleHandler}) =>{
	return <button type="button" className="btn btn-secondary" onClick={triangleHandler}>Triangle</button>;
};

BtnTriangle.propTypes = {
	triangleHandler: PropTypes.func
};

export default BtnTriangle;