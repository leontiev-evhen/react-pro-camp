import React from 'react';
import { Spinner } from 'react-bootstrap';

export function Preloader() {
	return (
		<div className="preloder">
			<Spinner animation="grow" variant="danger" className="loader" />
		</div>
	);
}
