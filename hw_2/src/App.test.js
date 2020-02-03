import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Test for <App />', ()=>{
	it('To have <Profile />', ()=>{
		const wrapper = shallow(<App />);
		const isProfile = wrapper.find('Profile');

		expect(isProfile).toHaveLength(1);
	});
});