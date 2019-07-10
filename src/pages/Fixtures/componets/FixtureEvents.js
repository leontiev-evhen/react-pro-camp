import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Accordion, Button } from 'react-bootstrap';
import { Preloader } from '../../../components';
import { getFixturesById } from '../../../providers/fixtures';
import EventsListItem from './EventsListItem';

class FixtureEvents extends Component {
	state = {
		events: [],
		isFetching: false,
		canRequest: false,
	};

	fetchEvents = () => {
		this.setState(
			prevState => {
				return {
					canRequest: !prevState.canRequest,
				};
			},
			async () => {
				if (this.state.canRequest) {
					this.setState({
						isFetching: true,
					});
					try {
						const response = await getFixturesById(this.props.id);
						this.setState({
							events: response.api.fixtures[0].events,
							isFetching: false,
						});
					} catch (e) {
						this.setState({
							error: e.message || e.data.message,
							isFetching: false,
						});
					}
				}
			}
		);
	};
	render() {
		const { isFetching, events } = this.state;
		return (
			<Accordion>
				<Card>
					<Accordion.Toggle
						as={Button}
						variant="link"
						eventKey="0"
						onClick={this.fetchEvents}
					>
						Show details
					</Accordion.Toggle>

					<Accordion.Collapse eventKey="0">
						<Fragment>
							{isFetching && <Preloader />}
							<Card.Body>
								<EventsListItem events={events} />
							</Card.Body>
						</Fragment>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		);
	}
}

FixtureEvents.propTypes = {
	id: PropTypes.number.isRequired,
};

export default FixtureEvents;
