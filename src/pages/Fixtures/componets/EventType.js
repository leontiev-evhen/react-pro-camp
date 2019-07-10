import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import EventTypeItem from './EventTypeItem';
import {
	GOAL_EVENT,
	CARD_EVENT,
	SUBSTITUTION_EVENT,
	PENALTY,
	YELLOW_CARD,
} from '../../../constants/eventTypes';
import goalIcon from '../icons/goal-icon.png';
import redCardIcon from '../icons/red-card-icon.png';
import yellowCardIcon from '../icons/yellow-card-icon.png';
import subsIcon from '../icons/substitution-icon.png';

function EventType({ event }) {
	let template, cardIcon;
	switch (event.type) {
		case GOAL_EVENT:
			template = (
				<EventTypeItem icon={goalIcon} elapsed={event.elapsed}>
					{event.player}
					{event.detail === PENALTY && <span> (P) </span>}
				</EventTypeItem>
			);
			break;
		case CARD_EVENT:
			cardIcon = event.detail === YELLOW_CARD ? yellowCardIcon : redCardIcon;
			template = (
				<EventTypeItem icon={cardIcon} elapsed={event.elapsed}>
					{event.player}
				</EventTypeItem>
			);
			break;
		case SUBSTITUTION_EVENT:
			template = (
				<EventTypeItem icon={subsIcon} elapsed={event.elapsed}>
					{event.player} | {event.detail}
				</EventTypeItem>
			);
			break;
		default:
			template = <Fragment>...</Fragment>;
	}
	return template;
}

EventType.propTypes = {
	event: PropTypes.shape({
		player: PropTypes.string,
		type: PropTypes.string,
		detail: PropTypes.string,
		elapsed: PropTypes.number,
	}).isRequired,
};

export default EventType;
