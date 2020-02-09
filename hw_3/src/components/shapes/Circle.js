import React from 'react';
import PropTypes from 'prop-types';

const style = {
	width: '100px',
	height: '100px',
	//margin: '10px 10px 10px 10px',
	borderRadius: 50,
	textAlign: 'center',
	fontWeight: 'bold',
};
const Circle = ({randomBg, children, isBlackTheme, id}) =>{
	return (
		<div style={{...style, 
					 background: isBlackTheme? 'white' : (randomBg||'green')}}
			 id={id}>{children}</div>
	);
};

Circle.propTypes = {
	randomBg: PropTypes.string,
	id: PropTypes.number,
	children: PropTypes.number,
	isBlackTheme:PropTypes.bool
};

export default Circle;