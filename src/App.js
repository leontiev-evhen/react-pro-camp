import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from './components';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Team from './pages/Team';
import Fixtures from './pages/Fixtures';
import NotFound from './pages/NotFound';

const App = () => (
	<Router>
		<Container>
			<Header />
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/teams" component={Teams} />
					<Route exact path="/team/:id" component={Team} />
					<Route exact path="/fixtures" component={Fixtures} />
					<Route component={NotFound} />
				</Switch>
			</main>
		</Container>
	</Router>
);

export default App;
