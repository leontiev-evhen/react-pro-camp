import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestFixtures, updateFixtures } from '../../actions';
import ContainerHOC from '../../hoc/ContainerHOC';
import FixturesList from './componets/FixturesList';

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
		this.props.fetchFixtures();
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll = () => {
		if (
			window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
			this.props.tempFixtures.length !== this.props.fixtures.length
		) {
			this.loadFixtures();
		}
	};

	loadFixtures = () => {
		this.props.loadFixtures();
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({
				loading: false,
			});
		}, 1000);
	};

	render() {
		const { isFetching, error, tempFixtures } = this.props;
		const { loading } = this.state;

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
	fixtures: PropTypes.array.isRequired,
	tempFixtures: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
	fetchFixtures: PropTypes.func.isRequired,
	loadFixtures: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	fixtures: state.fixtures.fixtures,
	tempFixtures: state.fixtures.tempFixtures,
	isFetching: state.fixtures.isFetching,
	error: state.fixtures.error,
});

const mapDispatchToProps = dispatch => ({
	fetchFixtures: () => {
		dispatch(requestFixtures());
	},
	loadFixtures: () => {
		dispatch(updateFixtures());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Fixtures);
