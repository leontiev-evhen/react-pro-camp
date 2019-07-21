import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Table } from 'react-bootstrap';

function StandingsList({ standings }) {
	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th>Rank</th>
					<th>Team</th>
					<th>MP</th>
					<th>W</th>
					<th>D</th>
					<th>L</th>
					<th>Pts</th>
				</tr>
			</thead>
			<tbody>
				{standings.map(item => (
					<tr key={item.team_id}>
						<td className="center">{item.rank}</td>
						<td className="center">
							<Link to={`/team/${item.team_id}`}>
								<Image src={item.logo} rounded width="20" />
							</Link>
						</td>
						<td className="center">{item.all.matchsPlayed}</td>
						<td className="center">{item.all.win}</td>
						<td className="center">{item.all.draw}</td>
						<td className="center">{item.all.lose}</td>
						<td className="center">{item.points}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

StandingsList.propTypes = {
	standings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StandingsList;
