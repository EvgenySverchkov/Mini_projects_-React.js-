import React from 'react';
import { shallow } from 'enzyme';

import UserTable from './UserTable';

const props = {
	userData: [1,2,3,4]
}

const wrapp = shallow(<UserTable {...props}/>);

it('Render all strings in table of <UserTable /> + 1 string is header', ()=>{
	const some = wrapp.find('tr');
	expect(some).toHaveLength(1 + props.userData.length);
});