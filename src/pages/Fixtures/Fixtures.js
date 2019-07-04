import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTeams } from '../../actions';
import ContainerHOC from '../../hoc/ContainerHOC';
import FixturesList from './FixturesList';

import { getFixturesLeagueById } from '../../providers/fixtures';
import { ID_LEAGUE } from '../../constants';

const DivContainerHOC = ContainerHOC(FixturesList);

class Fixtures extends Component {
	// componentDidMount() {
	// 	if (this.props.teams.length === 0) this.props.fetchTeams();
	// }
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
			const response = await getFixturesLeagueById(ID_LEAGUE);
			// console.log(response.api.fixtures.slice(0, 20));
			this.setState({
				teams: response.api.fixtures,
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
		const { teams, isFetching, error } = this.props;

		return (
			<DivContainerHOC teams={teams} isFetching={isFetching} error={error} />
		);
	}
}

Fixtures.propTypes = {
	teams: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
	fetchTeams: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	teams: state.teams.teams,
	isFetching: state.teams.isFetching,
	error: state.teams.error,
});

const mapDispatchToProps = dispatch => ({
	fetchTeams: () => {
		dispatch(fetchTeams());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Fixtures);
