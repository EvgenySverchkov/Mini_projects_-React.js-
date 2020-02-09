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
			return <div onClick={this.hand}><Component {...this.props} imgSRC = {this.state.imgSrc}/></div>;
		}
	}
}