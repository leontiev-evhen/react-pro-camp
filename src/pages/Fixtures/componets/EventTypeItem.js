import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

function EventTypeItem({ icon, elapsed, children }) {
	return (
		<Fragment>
			<span>{elapsed}&apos;</span>
			<Image src={icon} width="20" />
			{children}
		</Fragment>
	);
}

EventTypeItem.propTypes = {
	icon: PropTypes.string.isRequired,
	elapsed: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
};

export default EventTypeItem;
