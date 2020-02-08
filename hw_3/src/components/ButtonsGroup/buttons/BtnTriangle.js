import React from 'react';

const BtnTriangle = ({triangleHandler}) =>{
	return <button type="button" className="btn btn-secondary" onClick={triangleHandler}>Triangle</button>;
};

export default BtnTriangle;