import React, {useState, useEffect} from 'react';

import UserTable from './UserTable.js';
import BackButton from './BackButton';
import InfoAboutEmptyData from './WarnScreen';
import dataUserRequest from '../../services/requestForUsers.js';

const TableWrap = ({userId, backBtnHandler})=>{
	let [state, setState] = useState([]);
	let [userObjIsEmpty, setUserObjIsEmpty] = useState(false);

	useEffect(()=>{
		dataUserRequest(userId).then(data=>{
			if(!Object.keys(data).length){
				setUserObjIsEmpty(true);
			}else{
				setState(Object.entries(data));
			}
		});
	}, [userId]);

	return (
		<div style={wrapStyle}>
			{userObjIsEmpty ? <InfoAboutEmptyData/> : <UserTable userData = {state}/>}
			<BackButton backButtonHandler = {backBtnHandler}/>
		</div>
	);
};
const wrapStyle = {
	width: '40%',
	margin: '0 auto'
}
export default TableWrap;