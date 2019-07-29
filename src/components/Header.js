import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Figure,
} from 'react-bootstrap';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
	{
		link: '/',
		name: 'Home',
	},
	{
		link: '/teams',
		name: 'Teams',
	},
	{
		link: '/fixtures',
		name: 'Fixtures',
	},
	{
		link: '/odds',
		name: 'Odds',
	},
];

export function Header() {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">
					<Figure.Image
						src={logo}
						width="80"
						height="80"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{NAV_ITEMS.map(item => (
							<NavLink
								key={item.link}
								to={item.link}
								className="nav-link"
								exact
								activeClassName="selected"
							>
								{item.name}
							</NavLink>
						))}
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-secondary">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}
