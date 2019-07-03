import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Figure } from 'react-bootstrap';
import ContainerHOC from '../../hoc/ContainerHOC';
import { getTeamById } from '../../providers/teams';
import './style.css';

const DivContainerHOC = ContainerHOC(({ children }) => children);

class Team extends Component {
	state = {
		team: {},
		isFetching: true,
		error: '',
	};

	componentDidMount() {
		this.fetchTeam();
	}

	fetchTeam = async () => {
		const id = this.props.match.params.id;
		try {
			const response = await getTeamById(id);
			this.setState({
				team: response.api.teams[0],
				isFetching: false,
			});
		} catch (e) {
			this.setState({
				error: e.message || e.data.message,
				isFetching: false,
			});
		}
	};
	render() {
		const { team, isFetching, error } = this.state;
		return (
			<DivContainerHOC isFetching={isFetching} error={error}>
				<div className="team-section">
					<Row>
						<Col md={3}>
							<Figure>
								<Figure.Image
									width={171}
									height={180}
									alt="logo"
									src={team.logo}
								/>
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
			</DivContainerHOC>
		);
	}
}

Team.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Team;
