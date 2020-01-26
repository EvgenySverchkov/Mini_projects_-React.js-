import React from "react";
import PropTypes from 'prop-types';

import GreetingsLabel from "./GreetingsLabel";
import BackButton from "./GreetingsBackButton";

const Greeting = ({handler, dt}) =>(
		<div>
			<BackButton handler = {handler}/>
			<GreetingsLabel data = {dt}/>
		</div>
	); 

Greeting.propTypes = {
	handler: PropTypes.func,
	dt: PropTypes.object
}

export default Greeting;