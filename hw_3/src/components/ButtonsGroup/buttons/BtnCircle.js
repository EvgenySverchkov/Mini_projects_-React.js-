import React from 'react';
import PropTypes from 'prop-types';

const BtnCircle = ({circleHandler}) =>{
	return <button type="button" className="btn btn-secondary" onClick={circleHandler}>Circle</button>;
};

BtnCircle.propTypes = {
	circleHandler: PropTypes.func
};

export default BtnCircle;