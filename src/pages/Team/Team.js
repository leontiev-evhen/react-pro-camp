import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContainerHOC from '../../hoc/ContainerHOC';
import { getTeamById } from '../../providers/teams';
import TeamProfile from './TeamProfile';

const DivContainerHOC = ContainerHOC(TeamProfile);

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
			<DivContainerHOC team={team} isFetching={isFetching} error={error} />
		);
	}
}

Team.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Team;
