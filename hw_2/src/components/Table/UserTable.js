import React from 'react';
import PropTypes from 'prop-types';

const Table = ({userData}) =>{
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Property</th>
					<th scope="col">Value</th>
				</tr>
			</thead>
			<tbody>
				{userData.map((item, i)=>(
					<tr key={i+1}>
						<td>{item[0]}</td>
						<td>{typeof item[1] === 'object'? '--no data--' : item[1]}</td>
					</tr>))}
			</tbody>
		</table>
	);
}

Table.propTypes = {
	userData: PropTypes.array
};

export default Table;