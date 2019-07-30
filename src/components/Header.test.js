import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
	const Component = shallow(<Header />);

	it('Header component render correctly', () => {
		expect(Component).toMatchSnapshot();
	});

	it('Header navigation links', () => {
		expect(Component.find('.nav-link')).toHaveLength(3);
	});
});
