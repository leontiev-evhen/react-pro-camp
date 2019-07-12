import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { ID_LEAGUE } from '../../../constants';
import { API_FIXTURES_LIVE } from './mockData';
import FixturesLiveList from './FixturesLiveList';
import ContainerHOC from '../../../hoc/ContainerHOC';

const DivContainer = ContainerHOC(FixturesLiveList);

class FixturesLiveContainer extends Component {
	state = {
		fixturesLive: [],
		isFetching: false,
		error: '',
	};
	componentDidMount() {
		this.fetchStandings();
	}

	fetchStandings = id => {
		this.setState({ isFetchingStandings: true });
		try {
			let leagueId = id ? id : ID_LEAGUE;
			const result = API_FIXTURES_LIVE.fixtures[leagueId];
			this.setState({
				fixturesLive: result,
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
		const { fixturesLive, isFetching, error } = this.state;
		const { leagues } = this.props;
		return (
			<div className="section">
				<div className="btn-sections">
					<div onClick={() => this.fetchStandings('all')}>All</div>
					{leagues.map(item => (
						<div key={item.id} onClick={() => this.fetchStandings(item.id)}>
							<Image src={item.icon} rounded />
						</div>
					))}
				</div>
				<div className="section-title center">Standings</div>
				<div>
					<DivContainer
						fixturesLive={fixturesLive}
						isFetching={isFetching}
						error={error}
					/>
				</div>
			</div>
		);
	}
}

FixturesLiveContainer.propTypes = {
	leagues: PropTypes.array.isRequired,
};

export default FixturesLiveContainer;
