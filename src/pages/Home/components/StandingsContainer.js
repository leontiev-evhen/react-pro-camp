import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { getStandingsLeagueById } from '../../../providers/standings';
import { ID_LEAGUE } from '../../../constants';
import StandingsList from './StandingsList';
import ContainerHOC from '../../../hoc/ContainerHOC';

const DivContainer = ContainerHOC(StandingsList);

class StandingsContainer extends Component {
	state = {
		standings: [],
		isFetching: false,
		error: '',
	};
	componentDidMount() {
		this.fetchStandings();
	}

	fetchStandings = async id => {
		this.setState({ isFetching: true });
		try {
			let leagueId = id ? id : ID_LEAGUE;
			const result = await getStandingsLeagueById(leagueId);
			this.setState({
				standings: result.api.standings[0],
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
		const { standings, isFetching, error } = this.state;
		const { leagues } = this.props;
		return (
			<div className="section">
				<div className="btn-sections">
					{leagues.map(item => (
						<div key={item.id} onClick={() => this.fetchStandings(item.id)}>
							<Image src={item.icon} rounded />
						</div>
					))}
				</div>
				<div className="section-title center">Standings</div>
				<div>
					<DivContainer
						standings={standings}
						isFetching={isFetching}
						error={error}
					/>
				</div>
			</div>
		);
	}
}

StandingsContainer.propTypes = {
	leagues: PropTypes.array.isRequired,
};

export default StandingsContainer;
