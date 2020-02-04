import React from 'react';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';

import ErrMessage from './InfoAboutEmptyRequestScreen';

it('Snapshot tets for <InfoAboutEmptyRequestScreen />', ()=>{
	const some = renderer.create(<ErrMessage />).toJSON();
	expect(some).toMatchSnapshot();
});