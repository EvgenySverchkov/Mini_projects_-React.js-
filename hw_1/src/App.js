import React from 'react';
import './App.css';

import UserForm from "./components/UserForm";
import Greetings from "./components/Greetings";

class App extends React.Component{
	constructor(){
		super();

		this.onSubmit = this.onSubmit.bind(this);
		this.onBack = this.onBack.bind(this);

		this.state = {currentComponent: <UserForm onSbmt={this.onSubmit}/>};
	}

	onSubmit(data){
		this.setState({currentComponent: <Greetings dt = {data} handler = {this.onBack}/>});
	}

	onBack(){
		this.setState({currentComponent: <UserForm onSbmt={this.onSubmit}/>});
	}
	render(){
		return <>{this.state.currentComponent}</>;
	}
}

export default App;
