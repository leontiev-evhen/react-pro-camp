import React from 'react';
import { shallow } from 'enzyme';
import TeamProfile from './TeamProfile';

describe('TeamProfile', () => {
	const props = {
		team: {
			logo: 'logo.png',
			venue_city: 'London',
			venue_address: 'Baker street',
			name: 'Arsenal',
			country: 'England',
			founded: 1989,
			venue_name: 'Stadium name',
			venue_capacity: 20000,
		},
	};

	const listOfValues = [
		'Country: England',
		'Founded: 1989',
		'Stadium: «Stadium name»',
		'Capacity: 20000',
	];

	const Component = shallow(<TeamProfile {...props} />);

	it('TeamProfile component render correctly', () => {
		expect(Component).toMatchSnapshot();
	});

	it('TeamProfile name', () => {
		expect(
			Component.find('.team-section')
				.find('h1')
				.text()
		).toEqual(props.team.name);
	});

	it('TeamProfile logo', () => {
		expect(
			Component.find('.team-section')
				.find('FigureImage')
				.prop('src')
		).toEqual(props.team.logo);
	});

	it('TeamProfile city', () => {
		expect(
			Component.find('.team-section')
				.find('FigureCaption')
				.find('div')
				.first()
				.text()
		).toEqual(props.team.venue_city);
	});

	it('TeamProfile address', () => {
		expect(
			Component.find('.team-section')
				.find('FigureCaption')
				.find('div')
				.last()
				.text()
		).toEqual(props.team.venue_address);
	});

	it('TeamProfile list of value', () => {
		Component.find('.team-section')
			.find('li')
			.forEach((node, key) => {
				expect(node.text()).toEqual(listOfValues[key]);
			});
	});
});
