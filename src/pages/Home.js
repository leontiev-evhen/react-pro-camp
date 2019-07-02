import React, { Component } from 'react';
import { Row, Col, Media } from 'react-bootstrap';
import ContainerHOC from '../hoc/ContainerHOC';
import { getLeagueTeamsById } from '../providers/teams';

const ID_LEAGUE = 2;
const DivContainerHOC = ContainerHOC(({ children }) => children);

const createList = data => {
	let i,
		j,
		list = [],
		tempArray = [],
		chunk = 4;

	for (i = 0, j = data.length; i < j; i += chunk) {
		tempArray = data.slice(i, i + chunk);
		let items = [];

		tempArray.map(item => {
			return items.push(
				<Col key={item.team_id} md="3">
					<Media as="li">
						<img
							width={50}
							height={50}
							className="mr-3"
							src={item.logo}
							alt="logo"
						/>
						<Media.Body>
							<div>{item.name}</div>
							<small className="text-muted city-name">{item.venue_city}</small>
						</Media.Body>
					</Media>
				</Col>
			);
		});
		list.push(
			<div key={i} className="my-3">
				<Row>{items}</Row>
			</div>
		);
	}
	return list;
};

class Home extends Component {
	state = {
		teams: [],
		isFetching: true,
		error: '',
	};

	componentDidMount() {
		this.getTeams();
	}

	getTeams = async () => {
		try {
			const response = await getLeagueTeamsById(ID_LEAGUE);
			this.setState({
				teams: response.api.teams,
				isFetching: false,
			});
		} catch (e) {
			this.setState({
				error: e.data.message,
				isFetching: false,
			});
		}
	};

	render() {
		const { teams, isFetching, error } = this.state;

		return (
			<DivContainerHOC isFetching={isFetching} error={error}>
				<ul>{createList(teams)}</ul>
			</DivContainerHOC>
		);
	}
}

export default Home;
