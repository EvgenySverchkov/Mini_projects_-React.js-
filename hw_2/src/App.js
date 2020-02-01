import React, {useState} from 'react';

import './App.css';
import Profile from "./components/Profile.js";
import TableWrap from "./components/Table";

function App() {
	let [stateApp, setStateApp] = useState(<Profile heandler = {formHeandler}/>);

	function formHeandler(e){
		e.preventDefault();
		let userId = e.target.elements.userId.value;
		if(!userId){
			alert('You should enter userId to continue');
		}else{
			setStateApp(<TableWrap userId = {userId} backBtnHandler = {backToProfileHandler}/>);
		}
	};
	function backToProfileHandler(){
		setStateApp(<Profile heandler = {formHeandler}/>);
	}
	return stateApp;
}

export default App;
