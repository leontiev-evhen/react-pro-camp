import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { API_ODDS } from './mockData';
import OddsList from './OddsList';
import ContainerHOC from '../../../hoc/ContainerHOC';
import engIcon from '../icons/england.png';

const DivContainer = ContainerHOC(OddsList);

class OddsContainer extends Component {
	state = {
		odds: [],
		isFetching: false,
		error: '',
	};
	componentDidMount() {
		this.fetchOdds();
	}

	fetchOdds = () => {
		this.setState({ isFetching: true });
		try {
			setTimeout(() => {
				const result = API_ODDS.api;
				this.setState({
					odds: result,
					isFetching: false,
				});
			}, 500);
		} catch (e) {
			this.setState({
				error: e.message || e.data.message,
				isFetching: false,
			});
		}
	};

	render() {
		const { odds, isFetching, error } = this.state;
		return (
			<div className="section">
				<div className="btn-sections">
					<Image src={engIcon} rounded />
				</div>
				<div className="section-title center">Odds</div>
				<div>
					<DivContainer odds={odds} isFetching={isFetching} error={error} />
				</div>
			</div>
		);
	}
}

export default OddsContainer;
