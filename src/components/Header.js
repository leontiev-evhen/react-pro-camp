import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';

export function Header() {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">
					<img
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
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Teams</Nav.Link>
						<Nav.Link href="#link">Fixtures</Nav.Link>
						<Nav.Link href="#link">Odds</Nav.Link>
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
