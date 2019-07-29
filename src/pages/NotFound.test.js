import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
	const Component = shallow(<NotFound />);

	it('NotFound component render correctly', () => {
		expect(Component).toMatchSnapshot();
	});

	it('NotFound text', () => {
		expect(Component.find('h2').text()).toEqual('Page not found');
	});
});
