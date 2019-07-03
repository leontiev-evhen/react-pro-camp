import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Figure } from 'react-bootstrap';
import { ErrorBoundary } from '../../components';
import ContainerHOC from '../../hoc/ContainerHOC';
import { getLeagueTeamsById } from '../../providers/teams';
import { ID_LEAGUE } from '../../constants';
import './style.css';

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
				error: e.message || e.data.message,
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
