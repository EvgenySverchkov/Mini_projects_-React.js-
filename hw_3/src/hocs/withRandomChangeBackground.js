import React, {useState} from 'react';

export default (Component)=>({id, isBlackTheme, children})=>{
	let [state, setState] = useState(undefined);
	function randomBg(event){
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		setState(color);
	}
	return (<div onClick={randomBg}><Component isBlackTheme={isBlackTheme} 
											   children={children}
											   id={id}
											   randomBg={state}/></div>);
};