import React from 'react';

import withDnd from './withDragAndDrop.js';
import withDashedBorder from './withDashedBorder.js';

export default (Component, shapes, scalingCoef)=>{
	return class SquareLogicHOC extends React.Component{
		render(){
			if((shapes.length+1)%2){
				const ComponentWithDnd = withDnd(Component);
				return (<ComponentWithDnd key={shapes.length+1} 
										  coef={scalingCoef}
										  isBlackTheme = {this.props.isBlackTheme}>{shapes.length+1}</ComponentWithDnd>);
			}
			else if((shapes.length+1)%4===0){
				const ComponentWithDashedBorder = withDashedBorder(Component);
				return (<ComponentWithDashedBorder key={shapes.length+1} 
												   coef={scalingCoef}
												   isBlackTheme = {this.props.isBlackTheme}>{shapes.length+1}</ComponentWithDashedBorder>);
			}
			else{
				return (<Component key={shapes.length+1} 
								   coef={scalingCoef}
								   isBlackTheme = {this.props.isBlackTheme}>{shapes.length+1}</Component>);
			}
		}
	}
}