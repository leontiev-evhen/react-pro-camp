import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

function ContainerHOC(Component) {
	function containerHOC({ isFetching, error, ...props }) {
		if (isFetching)
			return (
				<div className="preloder">
					<Spinner animation="grow" variant="danger" className="loader" />
				</div>
			);
		if (error) return <div className="error-message">{error}</div>;
		return <Component {...props} />;
	}
	containerHOC.propTypes = {
		isFetching: PropTypes.bool.isRequired,
		error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
	};
	return containerHOC;
}

export default ContainerHOC;
