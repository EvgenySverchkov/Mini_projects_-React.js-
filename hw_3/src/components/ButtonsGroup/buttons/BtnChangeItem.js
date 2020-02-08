import React from 'react';

const BtnChangeItem = ({changeItemHandler}) =>{
	return <button type="button" className="btn btn-secondary" onClick={changeItemHandler}>Change item</button>;
};

export default BtnChangeItem;