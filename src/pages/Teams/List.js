import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Figure } from 'react-bootstrap';
import { ErrorBoundary } from '../../components';
import './style.css';

function List({ teams }) {
	return (
		<Row>
			{teams.map(item => (
				<ErrorBoundary key={item.team_id}>
					<Col md="3">
						<div className="section-team">
							<Link to={`/team/${item.team_id}`}>
								<div className="section-team-title">{item.name}</div>
								<Figure>
									<Figure.Image alt="logo" src={item.logo} />
								</Figure>
								<small>{item.venue_city}</small>
							</Link>
						</div>
					</Col>
				</ErrorBoundary>
			))}
		</Row>
	);
}

List.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
