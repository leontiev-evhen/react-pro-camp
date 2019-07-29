import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Figure } from 'react-bootstrap';
import './style.css';

function TeamProfile({ team }) {
	return (
		<div className="team-section">
			<Row>
				<Col md={3}>
					<Figure>
						<Figure.Image width={171} height={180} alt="logo" src={team.logo} />
						<Figure.Caption>
							<div>{team.venue_city}</div>
							<div>{team.venue_address}</div>
						</Figure.Caption>
					</Figure>
				</Col>
				<Col md={9}>
					<h1>{team.name}</h1>
					<ul>
						<li>
							<b>Country:</b> {team.country}
						</li>
						<li>
							<b>Founded:</b> {team.founded}
						</li>
						<li>
							<b>Stadium:</b> «{team.venue_name}»
						</li>
						<li>
							<b>Capacity:</b> {team.venue_capacity}
						</li>
					</ul>
				</Col>
			</Row>
		</div>
	);
}

TeamProfile.propTypes = {
	team: PropTypes.shape({
		logo: PropTypes.string,
		venue_city: PropTypes.string,
		venue_address: PropTypes.string,
		name: PropTypes.string,
		country: PropTypes.string,
		founded: PropTypes.number,
		venue_name: PropTypes.string,
		venue_capacity: PropTypes.number,
	}).isRequired,
};

export default TeamProfile;
