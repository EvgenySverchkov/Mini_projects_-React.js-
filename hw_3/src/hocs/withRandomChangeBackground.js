import React, {useState} from 'react';

export default (Component)=>({destroyHandler, id, isBlackTheme, children})=>{
	let [state, setState] = useState(undefined);
	function randomBg(event){
		destroyHandler(event.target);
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		setState(color);
	}
	return (<Component changeBgHandl={randomBg} id={id} isBlackTheme={isBlackTheme} children={children} randomBg={state}/>);
};