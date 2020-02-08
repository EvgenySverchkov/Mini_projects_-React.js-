import React from 'react';

const imgUrl = "http://htmlbook.ru/example/images/dzen.png";

export default (Component)=>{
	return class extends React.Component{
		constructor(){
			super();
			this.state={
				imgSrc: ''
			};
			this.hand = this.hand.bind(this);
		}
		hand(){
			this.setState({imgSrc: imgUrl})
		}
		render(){
			return <Component {...this.props} handlerClick={this.hand} imgSRC = {this.state.imgSrc}/>;
		}
	}
}