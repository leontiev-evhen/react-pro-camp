import React from 'react';
import PropTypes from 'prop-types';
import { Preloader } from '../components';

function ContainerHOC(Component) {
	function containerHOC({ isFetching, error, ...props }) {
		if (isFetching) return <Preloader />;
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
