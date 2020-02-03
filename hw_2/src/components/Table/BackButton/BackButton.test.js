import React from 'react';
import { shallow } from 'enzyme';
import BackButton from './BackButton';

describe('Test for <BackButton/>', ()=>{
	const mock = jest.fn();
	const nextProps= {
		backButtonHandler: mock
	};
	it('Is element here', ()=>{
		const wra = shallow(<BackButton />);
		const arrow = wra.text();

		expect(arrow).toBe('←');
	});

	it('To run handler of click button', ()=>{
		const some = shallow(<BackButton {...nextProps}/>);
		some.simulate('click');
		expect(mock).toHaveBeenCalled();
	});
});