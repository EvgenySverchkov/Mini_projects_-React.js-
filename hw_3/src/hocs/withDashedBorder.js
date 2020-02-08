import React from 'react';

export default (Component)=>{
	return class withDashedBorderHOC extends React.Component{
		render(){
			return <Component {...this.props} dashedBorder='dashed 2px black'/>
		}
	}
}