import React from "react";

const BirthdayInput = () => <input type="date" className="form-control" id="birthday" placeholder="Birthday"/>;

const BirthdayLabel = () => <label htmlFor="birthday">Enter your birthday</label>;

const AgeGroup = () => (
	<div className="form-group">
		<BirthdayLabel/>
		<BirthdayInput/>
	</div>
);

export default AgeGroup;