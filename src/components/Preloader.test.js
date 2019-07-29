import React from 'react';
import { mount } from 'enzyme';
import { Preloader } from './Preloader';

describe('Preloader component', () => {
	const Component = mount(<Preloader />);
	it('Preloader component render correctly', () => {
		expect(Component).toMatchSnapshot();
	});
});
