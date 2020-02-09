import React from 'react';

export default (Component, destroyHandler) => {
	return class WithChanceDestroyHOC extends React.Component{
		render(){
			return (<div onClick={(event)=>destroyHandler(event.target)}><Component {...this.props}/></div>);
		}
	}
};