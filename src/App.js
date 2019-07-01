import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from './components';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => (
	<Router>
		<Header />
		<main>
			<Container>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</Container>
		</main>
	</Router>
);

export default App;
