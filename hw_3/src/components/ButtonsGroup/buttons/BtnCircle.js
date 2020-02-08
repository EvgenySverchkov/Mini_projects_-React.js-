import React from 'react';

const BtnCircle = ({circleHandler}) =>{
	return <button type="button" className="btn btn-secondary" onClick={circleHandler}>Circle</button>;
};

export default BtnCircle;