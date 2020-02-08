import React from 'react';

const style = {
	width: '100px',
	height: '100px',
	margin: '10px 10px 10px 10px',
	borderRadius: 50,
	textAlign: 'center',
	fontWeight: 'bold',
};
const Circle = ({randomBg, changeBgHandl, hand, id, children, isBlackTheme}) =>{
	return (
		<div style={{...style, 
					 background: isBlackTheme? 'white' : (randomBg||'green')}} 
			 onClick={changeBgHandl}
			 id = {id}>{children}</div>
	);
};
export default Circle;