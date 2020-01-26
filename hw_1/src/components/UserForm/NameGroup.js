import React from "react"

const NameInput = () => <input type="text" className="form-control" id="name" placeholder="Name"/>;

const NameLabel = () => <label htmlFor="name">What is your name?</label>;

const NameGroup = () =>(
	<div className="form-group">
		<NameLabel/>
		<NameInput/>
	</div>);

export default NameGroup;