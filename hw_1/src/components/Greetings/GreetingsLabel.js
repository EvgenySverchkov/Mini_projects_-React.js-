import React from 'react';
import PropTypes from 'prop-types';

import { daysToDate } from "../../services/date";

const getCorrectUserName = name => name || "Anonymous";

const getTextByBirthday = (name, date) =>{
	if(!date){
		return `Hello, ${name}!`;
	}

	const days = daysToDate(date);
	const isBirthdayToday = days === 0;

	return isBirthdayToday
		? `Happy Birthday, ${name}!`
		: `Hello, ${name}! It's ${days} days left until your birthday`;
}

const GreetingsLabel = ({data}) => {
	const { name, birthday } = data;
	const userName = getCorrectUserName(name);
	const label = getTextByBirthday(userName, birthday);
	return <span>{label}</span>
};

GreetingsLabel.propTypes = {
	data: PropTypes.object
}

export default GreetingsLabel;