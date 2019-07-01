import React, { Component } from 'react';
import { Row, Col, Media, Spinner } from 'react-bootstrap';
import { getLeagueTeamsById } from '../providers/teams';

const ID_LEAGUE = 2;

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
							<small className="text-muted">{item.venue_city}</small>
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
				error: e.message,
				isFetching: false,
			});
		}
	};

	render() {
		const { teams, isFetching } = this.state;

		if (isFetching) {
			return (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			);
		}

		return <ul>{createList(teams)}</ul>;
	}
}

export default Home;
