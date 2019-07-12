import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
// import { ID_LEAGUE } from '../../../constants';
import OddsList from './OddsList';
import ContainerHOC from '../../../hoc/ContainerHOC';

const DivContainer = ContainerHOC(OddsList);

const API = {
	api: {
		results: 34,
		odds: [
			{
				fixture: {
					league_id: 404,
					fixture_id: 108705,
					updateAt: 1557496046,
				},
				bookmakers: [
					{
						bookmaker_id: 6,
						bookmaker_name: 'bwin',
						bets: [
							{
								label_id: 1,
								label_name: 'Match Winner',
								values: [
									{
										value: 'Home',
										odd: '2.20',
									},
									{
										value: 'Draw',
										odd: '3.70',
									},
									{
										value: 'Away',
										odd: '2.60',
									},
								],
							},
							{
								label_id: 8,
								label_name: 'Both Teams To Score',
								values: [
									{
										value: 'Yes',
										odd: '1.40',
									},
									{
										value: 'No',
										odd: '2.75',
									},
								],
							},
						],
					},
				],
			},
		],
	},
};
class OddsContainer extends Component {
	state = {
		standings: [],
		isFetching: false,
		error: '',
	};
	componentDidMount() {
		//this.fetchStandings();
	}

	fetchStandings = () => {
		this.setState({ isFetching: true });
		try {
			//let leagueId = id ? id : ID_LEAGUE;
			const result = API.bookmakers.bets;
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

OddsContainer.propTypes = {
	leagues: PropTypes.array.isRequired,
};

export default OddsContainer;
