import React from 'react';
import PropTypes from 'prop-types';

const BtnSquare = ({squareHandler}) =>{
	return <button type="button" className="btn btn-secondary" onClick={squareHandler}>Square</button>;
};

BtnSquare.propTypes = {
	squareHandler:PropTypes.func
};

export default BtnSquare;