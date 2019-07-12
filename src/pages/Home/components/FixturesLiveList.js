import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Image } from 'react-bootstrap';
import '../style.css';

function FixturesLiveList({ fixturesLive }) {
	return (
		<React.Fragment>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>Home team</th>
						<th>Score</th>
						<th>Away team</th>
						<th>Elapsed</th>
					</tr>
				</thead>
				<tbody>
					{fixturesLive.map(item => (
						<tr key={item.fixture_id}>
							<td className="center">
								<Link to={`/team/${item.homeTeam.team_id}`}>
									<Image src={item.homeTeam.logo} rounded width="30" />
								</Link>
							</td>
							<td className="center">
								{item.score.fulltime} ({item.score.halftime})
							</td>
							<td className="center">
								<Link to={`/team/${item.awayTeam.team_id}`}>
									<Image src={item.awayTeam.logo} rounded width="30" />
								</Link>
							</td>
							<td className="center">{item.elapsed}&apos;</td>
						</tr>
					))}
				</tbody>
			</Table>
		</React.Fragment>
	);
}

FixturesLiveList.propTypes = {
	fixturesLive: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FixturesLiveList;
