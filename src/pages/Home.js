import React from 'react';
import { Row, Col, Media } from 'react-bootstrap';

const data = [
	{
		team_id: 1,
		name: 'Manchester United',
		code: 'MUN',
		logo: 'https://www.api-football.com/public/teams/33.png',
		country: 'England',
		founded: 1878,
		venue_name: 'Old Trafford',
		venue_surface: 'grass',
		venue_address: 'Sir Matt Busby Way',
		venue_city: 'Manchester',
		venue_capacity: 76212,
	},
	{
		team_id: 45,
		name: 'Everton',
		logo: 'https://www.api-football.com/public/teams/45.png',
		country: 'England',
		founded: 1878,
		venue_name: 'Goodison Park',
		venue_surface: 'grass',
		venue_address: 'Goodison Road',
		venue_city: 'Liverpool',
		venue_capacity: 40569,
	},
	{
		team_id: 40,
		name: 'Liverpool',
		logo: 'https://www.api-football.com/public/teams/40.png',
		country: 'England',
		founded: 1892,
		venue_name: 'Anfield',
		venue_surface: 'grass',
		venue_address: 'Anfield Road',
		venue_city: 'Liverpool',
		venue_capacity: 55212,
	},
	{
		team_id: 48,
		name: 'West Ham',
		logo: 'https://www.api-football.com/public/teams/48.png',
		country: 'England',
		founded: 1895,
		venue_name: 'London Stadium',
		venue_surface: 'grass',
		venue_address: 'Marshgate Lane, Stratford',
		venue_city: 'London',
		venue_capacity: 60000,
	},
	{
		team_id: 47,
		name: 'Tottenham',
		logo: 'https://www.api-football.com/public/teams/47.png',
		country: 'England',
		founded: 1882,
		venue_name: 'Tottenham Hotspur Stadium',
		venue_surface: 'grass',
		venue_address: 'Bill Nicholson Way, 748 High Road',
		venue_city: 'London',
		venue_capacity: 62062,
	},
	{
		team_id: 35,
		name: 'Bournemouth',
		logo: 'https://www.api-football.com/public/teams/35.png',
		country: 'England',
		founded: 1899,
		venue_name: 'Vitality Stadium',
		venue_surface: 'grass',
		venue_address: 'Dean Court, Kings Park',
		venue_city: 'Bournemouth, Dorset',
		venue_capacity: 12000,
	},
	{
		team_id: 43,
		name: 'Cardiff',
		logo: 'https://www.api-football.com/public/teams/43.png',
		country: 'Wales',
		founded: 1889,
		venue_name: 'Cardiff City Stadium',
		venue_surface: 'grass',
		venue_address: 'Leckwith Road',
		venue_city: 'Caerdydd',
		venue_capacity: 33280,
	},
	{
		team_id: 36,
		name: 'Fulham',
		logo: 'https://www.api-football.com/public/teams/36.png',
		country: 'England',
		founded: 1879,
		venue_name: 'Craven Cottage',
		venue_surface: 'grass',
		venue_address: 'Stevenage Road',
		venue_city: 'London',
		venue_capacity: 25700,
	},
	{
		team_id: 52,
		name: 'Crystal Palace',
		logo: 'https://www.api-football.com/public/teams/52.png',
		country: 'England',
		founded: 1905,
		venue_name: 'Selhurst Park',
		venue_surface: 'grass',
		venue_address: 'Holmesdale Road',
		venue_city: 'London',
		venue_capacity: 26309,
	},
	{
		team_id: 37,
		name: 'Huddersfield',
		logo: 'https://www.api-football.com/public/teams/37.png',
		country: 'England',
		founded: 1908,
		venue_name: "John Smith's Stadium",
		venue_surface: 'grass',
		venue_address: 'Stadium Way',
		venue_city: 'Huddersfield, West Yorkshire',
		venue_capacity: 24554,
	},
	{
		team_id: 34,
		name: 'Newcastle',
		logo: 'https://www.api-football.com/public/teams/34.png',
		country: 'England',
		founded: 1892,
		venue_name: "St. James' Park",
		venue_surface: 'grass',
		venue_address: 'St. James&apos; Street',
		venue_city: 'Newcastle upon Tyne',
		venue_capacity: 52389,
	},
	{
		team_id: 46,
		name: 'Leicester',
		logo: 'https://www.api-football.com/public/teams/46.png',
		country: 'England',
		founded: 1884,
		venue_name: 'King Power Stadium',
		venue_surface: 'grass',
		venue_address: 'Filbert Way',
		venue_city: 'Leicester, Leicestershire',
		venue_capacity: 32262,
	},
];

const createList = () => {
	let i,
		j,
		list = [],
		tempArray = [],
		chunk = 4;

	for (i = 0, j = data.length; i < j; i += chunk) {
		tempArray = data.slice(i, i + chunk);
		let items = [];

		tempArray.map(item => {
			return items.push(
				<Col key={item.team_id} md="3">
					<Media as="li">
						<img
							width={50}
							height={50}
							className="mr-3"
							src={item.logo}
							alt="logo"
						/>
						<Media.Body>
							<div>{item.name}</div>
							<small className="text-muted">City: {item.venue_city}</small>
						</Media.Body>
					</Media>
				</Col>
			);
		});
		list.push(
			<div key={i} className="my-3">
				<Row>{items}</Row>
			</div>
		);
	}
	return list;
};

function Home() {
	return <ul>{createList()}</ul>;
}

export default Home;
