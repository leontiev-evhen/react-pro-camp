import React from 'react';
import PropTypes from 'prop-types';
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
						<td>{item.rank}</td>
						<td>
							<Image src={item.logo} rounded width="20" />
						</td>
						<td>{item.all.matchsPlayed}</td>
						<td>{item.all.win}</td>
						<td>{item.all.draw}</td>
						<td>{item.all.lose}</td>
						<td>{item.points}</td>
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
