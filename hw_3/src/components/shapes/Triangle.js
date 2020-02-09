import React from 'react';
import PropTypes from 'prop-types';

const style = {
	width: '0px',
	height: '0px',
	margin: '10px 10px 10px 10px',
	borderLeft: '50px solid transparent',
	borderRight: '50px solid transparent',
	borderBottom: '100px solid red',
	fontWeight: 'bold',

}
const imgStyle ={
	margin: '10px 10px 10px 10px',
}

const Triangle = ({imgSRC, children, isBlackTheme}) =>{
	return (
	<>{imgSRC ? <img style = {{...imgStyle, filter: isBlackTheme? 'invert(100%)': 'invert(0%)' }} 
					 src={imgSRC} 
					 width="100" 
					 height="100" 
					 alt=''/>: 
				<div style={{...style, borderBottom: isBlackTheme?'100px solid white': '100px solid red'}} 
					 >{children}</div>}
	</>
	);
};

Triangle.propTypes = {
	handlerClick: PropTypes.func,
	imgSRC: PropTypes.string,
	children: PropTypes.number,
	isBlackTheme: PropTypes.bool

};

export default Triangle;