import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
	const props = {
		teams: [
			{
				team_id: 1,
				name: 'team1',
				logo: 'logo1.png',
			},
			{
				team_id: 2,
				name: 'team2',
				logo: 'logo2.png',
			},
			{
				team_id: 3,
				name: 'team3',
				logo: 'logo3.png',
			},
		],
	};
	const Component = shallow(<List {...props} />);

	it('List component render correctly', () => {
		expect(Component).toMatchSnapshot();
	});

	it('Renders 3 teams', () => {
		expect(Component.find('.section-team')).toHaveLength(3);
	});

	describe('Correct render for first team', () => {
		it('Team name', () => {
			expect(
				Component.find('.section-team-title')
					.first()
					.text()
			).toEqual(props.teams[0].name);
		});

		it('Team logo', () => {
			expect(
				Component.find('.section-team')
					.first()
					.find('FigureImage')
					.prop('src')
			).toEqual(props.teams[0].logo);
		});
	});
});
