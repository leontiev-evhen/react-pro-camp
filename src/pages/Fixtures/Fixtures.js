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
	state = {
		fixtures: [],
		tempFixtures: [],
		offset: 0,
		limit: 20,
		isFetching: true,
		loading: false,
		error: '',
	};

	componentDidMount() {
		this.getFixtures();
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll = () => {
		if (
			window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
			this.state.tempFixtures.length !== this.state.fixtures.length
		) {
			this.loadFixtures();
		}
	};

	loadFixtures = () => {
		this.setState(prevState => {
			const newArr = this.state.fixtures.slice(
				prevState.offset + 20,
				prevState.limit + 20
			);

			return {
				tempFixtures: [...prevState.tempFixtures, ...newArr],
				offset: prevState.offset + 20,
				limit: prevState.limit + 20,
				loading: true,
			};
		});
		setTimeout(() => {
			this.setState({
				loading: false,
			});
		}, 1000);
	};

	getFixtures = async () => {
		try {
			const response = await getFixturesLeagueById(ID_LEAGUE);
			this.setState({
				fixtures: response.api.fixtures,
				tempFixtures: response.api.fixtures.slice(0, 20),
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
		const { tempFixtures, loading, isFetching, error } = this.state;

		return (
			<DivContainerHOC
				fixtures={tempFixtures}
				loading={loading}
				isFetching={isFetching}
				error={error}
			/>
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
