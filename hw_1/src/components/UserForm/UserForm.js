import React from "react";
import PropTypes from 'prop-types';

import NameGroup from "./NameGroup";
import BirthdayGroup from "./BirthdayGroup";
import SubmitButton from "./SubmitButton";

import { getDataFromForm } from "../../services/formUtils";

const UserForm = ({onSbmt}) => {
	function submitHandler(e){
		e.preventDefault();
		onSbmt(getDataFromForm(e.target));
	}
	return (
		<form className="user-form" onSubmit = {submitHandler}>
			<NameGroup/>
			<BirthdayGroup/>
			<SubmitButton/>
		</form>
	);
}

UserForm.propTypes = {
	onSbmt: PropTypes.func
}

export default UserForm;