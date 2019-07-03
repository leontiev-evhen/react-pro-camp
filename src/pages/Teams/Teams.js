import React, { Component } from 'react';
import ContainerHOC from '../../hoc/ContainerHOC';
import { getLeagueTeamsById } from '../../providers/teams';
import { ID_LEAGUE } from '../../constants';
import List from './List';

const DivContainerHOC = ContainerHOC(List);

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
			<DivContainerHOC teams={teams} isFetching={isFetching} error={error} />
		);
	}
}

export default Home;
