import React from 'react';
import PropTypes from 'prop-types';

const BtnChangeItem = ({changeItemHandler}) =>{
	return <button type="button" className="btn btn-secondary" onClick={changeItemHandler}>Change item</button>;
};

BtnChangeItem.propTypes = {
	changeItemHandler: PropTypes.func
};

export default BtnChangeItem;