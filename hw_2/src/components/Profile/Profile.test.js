import React from 'react';
import testRenderer from 'react-test-renderer';

import Profile from './Profile';

it('Snapshot test for <Profile />', ()=>{
	const ProfileComponentTree = testRenderer.create(<Profile />).toJSON();
	expect(ProfileComponentTree).toMatchSnapshot();
});