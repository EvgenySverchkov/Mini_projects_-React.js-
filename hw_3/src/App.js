import React from 'react';

import BtnGroup from './components/ButtonsGroup';

import Square from './components/shapes/Square';
import Circle from './components/shapes/Circle';
import Triangle from './components/shapes/Triangle';

import withSquareLogic from './hocs/withSquareLogic.js';
import withClickForImage from './hocs/withClickForImage.js';
import withRandomChangeBg from './hocs/withRandomChangeBackground.js';
import withDestroyCircle from './hocs/withDestroyCircle.js';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			shapes: [],
			scalingCoef: 1,
			isBlackTheme: false 
		};
		this.squareHandler = this.squareHandler.bind(this);
		this.circleHandler = this.circleHandler.bind(this);
		this.triangleHandler = this.triangleHandler.bind(this);
		this.destroyElemWithChance = this.destroyElemWithChance.bind(this);
		this.changeItemHandler = this.changeItemHandler.bind(this);
	}

	squareHandler(){
		let shapes = this.state.shapes;
		let scalingCoef = this.state.scalingCoef;

		if((shapes.length+2)%3===0){
			this.setState({scalingCoef: scalingCoef * 2});
		}

		let ComponentWithSquareLogic = withSquareLogic(Square, shapes, scalingCoef);
		this.setState({shapes: [...shapes, <ComponentWithSquareLogic key={shapes.length+1} 
																	 isBlackTheme = {this.state.isBlackTheme} />]});	
	}

	circleHandler(){
		let shapes = this.state.shapes;
		const ComponentWithRandomChangeBg = withRandomChangeBg(Circle);
		const ComponentWithDestroyAndChangBg = withDestroyCircle(ComponentWithRandomChangeBg, this.destroyElemWithChance);
		this.setState({shapes: [...shapes, <ComponentWithDestroyAndChangBg key={shapes.length+1} 
																		   id={shapes.length+1} 
																		   isBlackTheme = {this.state.isBlackTheme}>{shapes.length+1}</ComponentWithDestroyAndChangBg>]});
	}

	triangleHandler(){
		let shapes = this.state.shapes;
		let ComponentWithClickForImage = withClickForImage(Triangle);
		this.setState({shapes:[...shapes, <ComponentWithClickForImage key={shapes.length + 1}
																	  isBlackTheme = {this.state.isBlackTheme}>{shapes.length + 1}</ComponentWithClickForImage>]});
	}

	changeItemHandler(){
		let isBlack = this.state.isBlackTheme ? false : true;

		let newArr = this.state.shapes.slice();		
		let newCopyArr = newArr.map(item => ({...item, props: {...item.props, isBlackTheme:isBlack}}));
		
		this.setState({shapes: newCopyArr});
		this.setState({isBlackTheme: isBlack});
	}

	destroyElemWithChance(elementToBeDestroyed){
		const elemArr = this.state.shapes.slice();
		const percent = Math.floor(Math.random() * 100);
		if(percent>=80 && percent<=100){
			const result = elemArr.findIndex((item)=>{return +elementToBeDestroyed.id===item.props.id});
			elemArr.splice(result, 1);
			this.setState({shapes:elemArr});
		}else{
			return undefined;
		}
	}

	render(){
		return (
			<div style={{height: '100vh', background: this.state.isBlackTheme?'black':'white'}}>
				<BtnGroup squareHandler={this.squareHandler}
						  circleHandler={this.circleHandler}
						  triangleHandler={this.triangleHandler}
						  changeItemHandler = {this.changeItemHandler}/>
				<div style={{display:'flex', flexWrap:'wrap'}}>{this.state.shapes}</div>
			</div>
		);
	}
}
export default App;
