import React from 'react';
import { shallow } from 'enzyme';
import { Team } from './Team';

describe('Team component', () => {
	const props = {
		match: {
			params: { id: 1 },
		},
	};

	const Component = shallow(<Team {...props} />);

	it('fetchTeam should be called', () => {
		const instance = Component.instance();
		jest.spyOn(instance, 'fetchTeam');
		instance.componentDidMount();
		expect(instance.fetchTeam).toHaveBeenCalledTimes(1);
	});

	it('Team component render correctly', () => {
		expect(Component).toMatchSnapshot();
	});
});
