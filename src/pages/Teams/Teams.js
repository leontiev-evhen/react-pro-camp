import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestTeams } from '../../actions';
import ContainerHOC from '../../hoc/ContainerHOC';
import List from './List';

const DivContainerHOC = ContainerHOC(List);

export class Teams extends Component {
	componentDidMount() {
		if (this.props.teams.length === 0) this.props.fetchTeams();
	}

	render() {
		const { teams, isFetching, error } = this.props;

		return (
			<DivContainerHOC teams={teams} isFetching={isFetching} error={error} />
		);
	}
}

Teams.propTypes = {
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
		dispatch(requestTeams());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Teams);
