import React from 'react';
import PropTypes from 'prop-types';

import BtnSquare from './buttons/BtnSquare';
import BtnCircle from './buttons/BtnCircle';
import BtnTriangle from './buttons/BtnTriangle';
import BtnChangeItem from './buttons/BtnChangeItem';

const BtnGroup = ({squareHandler, circleHandler, triangleHandler, changeItemHandler})=>{
	return (
		<div>
			<div style={{width: '15%', margin:'0 auto'}}>
				<div className="btn-group" role="group" aria-label="Basic example">
					<BtnSquare squareHandler = {squareHandler}/>
					<BtnCircle circleHandler = {circleHandler}/>
					<BtnTriangle triangleHandler = {triangleHandler}/>
					<BtnChangeItem changeItemHandler = {changeItemHandler}/>
				</div>
			</div>
		</div>);
}

BtnGroup.propTypes = {
	squareHandler: PropTypes.func,
	circleHandler: PropTypes.func,
	triangleHandler: PropTypes.func,
	changeItemHandler: PropTypes.func,
};

export default BtnGroup;