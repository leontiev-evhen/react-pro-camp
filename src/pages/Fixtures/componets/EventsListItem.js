import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import EventType from './EventType';

function EventsListItem({ events }) {
	return (
		<ListGroup variant="flush">
			{events.map((event, key) => {
				return (
					<ListGroup.Item key={key}>
						{<EventType event={event} />}
					</ListGroup.Item>
				);
			})}
		</ListGroup>
	);
}

EventsListItem.propTypes = {
	events: PropTypes.array.isRequired,
};

export default EventsListItem;
