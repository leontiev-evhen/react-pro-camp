import React from 'react';
import { Row, Col } from 'react-bootstrap';
import engIcon from './icons/england.png';
import spainIcon from './icons/spain.png';
import italyIcon from './icons/italy.png';
import ukrIcon from './icons/ukraine.png';
import StandingsContainer from './components/StandingsContainer';
import FixturesLiveContainer from './components/FixturesLiveContainer';
import OddsContainer from './components/OddsContainer';
import './style.css';

const LEAGUES = [
	{
		id: 2,
		icon: engIcon,
	},
	{
		id: 30,
		icon: spainIcon,
	},
	{
		id: 28,
		icon: italyIcon,
	},
	{
		id: 469,
		icon: ukrIcon,
	},
];

function Home() {
	return (
		<Row>
			<Col md="4">
				<FixturesLiveContainer leagues={LEAGUES} />
			</Col>
			<Col md="4">
				<StandingsContainer leagues={LEAGUES} />
			</Col>
			<Col md="4">
				<OddsContainer leagues={LEAGUES} />
			</Col>
		</Row>
	);
}

export default Home;
