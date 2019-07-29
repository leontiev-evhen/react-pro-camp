import React from 'react';
import { shallow } from 'enzyme';
import { Teams } from './Teams';

describe('Teams component', () => {
	const props = {
		teams: [],
		isFetching: false,
		error: '',
		fetchTeams: jest.fn(),
	};

	const Component = shallow(<Teams {...props} />);

	it('componentDidMount should be called', () => {
		jest.spyOn(Teams.prototype, 'componentDidMount');
		shallow(<Teams {...props} />);
		expect(Teams.prototype.componentDidMount).toHaveBeenCalled();
	});

	it('Teams component render correctly', () => {
		expect(Component).toMatchSnapshot();
	});

	describe('Teams component already has teams props', () => {
		const nextProps = {
			teams: [
				{
					name: 'team1',
				},
				{
					name: 'team2',
				},
				{
					name: 'team3',
				},
			],
			isFetching: false,
			error: '',
			fetchTeams: jest.fn(),
		};
		shallow(<Teams {...nextProps} />);
		it('Function fetchTeams should not be called', () => {
			expect(nextProps.fetchTeams).toHaveBeenCalledTimes(0);
		});
	});
});
