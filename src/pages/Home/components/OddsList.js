import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Table } from 'react-bootstrap';
import { timeConverter } from '../../../utils/date';

function OddsList({ odds }) {
	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th>Event date</th>
					<th>Home team</th>
					<th>Draw</th>
					<th>Away team</th>
				</tr>
			</thead>
			<tbody>
				{odds.map(item => (
					<tr key={item.id}>
						<td className="center">{timeConverter(item.event_timestamp)}</td>
						<td className="center">
							<Link to={`/team/${item.homeTeam.team_id}`}>
								<Image src={item.homeTeam.logo} rounded width="20" />
							</Link>
							<u>{item.values[0].odd}</u>
						</td>
						<td className="center">
							<u>{item.values[1].odd}</u>
						</td>
						<td className="center">
							<Link to={`/team/${item.awayTeam.team_id}`}>
								<Image src={item.awayTeam.logo} rounded width="20" />
							</Link>
							<u>{item.values[2].odd}</u>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

OddsList.propTypes = {
	odds: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OddsList;
