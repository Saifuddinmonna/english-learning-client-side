import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="/home">English Learning</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<NavLink to="#/">Features</NavLink>
						<NavLink to="#/courses">Pricing</NavLink>
						<NavLink to="#/blog">Pricing</NavLink>
						
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Light</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dark
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
