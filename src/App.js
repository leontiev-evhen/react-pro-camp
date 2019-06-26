import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from './components';

function App() {
	return (
		<React.Fragment>
			<Header />
			<main>
				<Container>
					<Row>
						<Col>1 Section</Col>
						<Col>2 Section</Col>
						<Col>3 Section</Col>
					</Row>
				</Container>
			</main>
		</React.Fragment>
	);
}

export default App;
