import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Image } from 'react-bootstrap';
import { Preloader } from '../../components';
import { timeConverter } from '../../utils/date';
import './style.css';

function FixtureList({ fixtures, loading }) {
	let round = 1;
	const MAX_COUNT_ROUNDS = 38;
	return (
		<>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Event date</th>
						<th>Home team</th>
						<th>Score</th>
						<th>Away team</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="line center" colSpan="5">
							{round} Round
						</td>
					</tr>
					{fixtures.map((item, key) => (
						<Fragment key={item.fixture_id}>
							<tr>
								<td className="center">
									{timeConverter(item.event_timestamp)}
								</td>
								<td className="section-home-team">
									<Link to={`/team/${item.homeTeam.team_id}`}>
										<Image src={item.homeTeam.logo} rounded width="30" />
										{item.homeTeam.team_name}
									</Link>
								</td>
								<td className="center">
									{item.score.fulltime} ({item.score.halftime})
								</td>
								<td className="section-away-team">
									<Link to={`/team/${item.awayTeam.team_id}`}>
										<Image src={item.awayTeam.logo} rounded width="30" />
										{item.awayTeam.team_name}
									</Link>
								</td>
								<td className="center">{item.status}</td>
							</tr>
							{(key + 1) % 10 === 0 && round + 1 <= MAX_COUNT_ROUNDS && (
								<tr>
									<td className="line center" colSpan="5">
										{++round} Round
									</td>
								</tr>
							)}
						</Fragment>
					))}
				</tbody>
			</Table>
			{loading && <Preloader />}
		</>
	);
}

FixtureList.propTypes = {
	fixtures: PropTypes.arrayOf(PropTypes.object).isRequired,
	loading: PropTypes.bool.isRequired,
};

export default FixtureList;
