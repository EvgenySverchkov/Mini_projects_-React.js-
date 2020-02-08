import React from 'react';
import PropTypes from 'prop-types';

const style = {
	margin: '10px 10px 10px 10px',
	textAlign: 'center',
	fontWeight: 'bold'
};

const Square = ({handlerDnd, coef, dashedBorder, children, isBlackTheme}) =>{
	return (
		<div className="square" 
			 style={{...style, 
			 		 width: `${50*coef}px`, 
			 		 height: `${50*coef}px`,
			 		 border: dashedBorder||'solid 1px black',
			 		 background: isBlackTheme? 'white' : 'blue'}}
			 onDragStart={handlerDnd}
			 draggable="true">{children}</div>
	);
};

Square.propTypes = {
	handlerDnd: PropTypes.func,
	coef: PropTypes.number,
	dashedBorder: PropTypes.string,
	children: PropTypes.number,
	isBlackTheme: PropTypes.bool
};

export default Square;