import React from 'react';
import { shallow, render } from 'enzyme';

import ErrMessage from './InfoAboutEmptyRequestScreen';

const wrapper = render(<ErrMessage />);
it('Snapshot tets for <InfoAboutEmptyRequestScreen />', ()=>{
	expect(wrapper).toMatchSnapshot();
});