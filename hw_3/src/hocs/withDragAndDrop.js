import React from 'react';

export default function(Component){
	return class withDndHOC extends React.Component{
		dndHandler(event){
			const element = event.target;
			element.style.position="absolute";
			element.style.zIndex = 1000;
			element.addEventListener('dragend', getCoordinates);

			function getCoordinates(event){
				const element = event.target;
				element.style.left = event.pageX - element.offsetWidth / 2 + 'px'; 
				element.style.top = event.pageY - element.offsetHeight / 2 + 'px';
			}
		};
		render(){
			return <Component {...this.props} handlerDnd={this.dndHandler}/>
		}
	}
}