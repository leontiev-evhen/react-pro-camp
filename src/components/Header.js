import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Figure,
	InputGroup,
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
];

export function Header() {
	const [isSollapsed, onToggle] = useState(false);
	return (
		<header>
			<Navbar
				onToggle={() => onToggle(!isSollapsed)}
				expanded={isSollapsed}
				bg="light"
				expand="lg"
			>
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
								onClick={() => onToggle(false)}
							>
								{item.name}
							</NavLink>
						))}
					</Nav>
					<Form inline>
						<InputGroup>
							<FormControl aria-describedby="basic-addon2" />
							<InputGroup.Append>
								<Button variant="outline-secondary">Search</Button>
							</InputGroup.Append>
						</InputGroup>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}
