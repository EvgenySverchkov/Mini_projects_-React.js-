import React from 'react';

const BtnSquare = ({squareHandler}) =>{
	return <button type="button" className="btn btn-secondary" onClick={squareHandler}>Square</button>;
};

export default BtnSquare;