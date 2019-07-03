import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Figure } from 'react-bootstrap';
import { ErrorBoundary } from '../../components';
import './style.css';

function List({ teams }) {
	let i,
		j,
		list = [],
		tempArray = [],
		chunk = 4;

	for (i = 0, j = teams.length; i < j; i += chunk) {
		tempArray = teams.slice(i, i + chunk);
		let items = [];

		tempArray.map(item => {
			return items.push(
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
			);
		});
		list.push(
			<div key={i} className="my-3">
				<Row>{items}</Row>
			</div>
		);
	}
	return <ul>{list}</ul>;
}

List.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
