import React from "react";
import "./Header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
	const { user, Signouthandle } = useContext(AuthContext);

	const handleSignouthandle = () => {
		Signouthandle()
			.then((result) => {
				// Sign-out successful.
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				console.log(error.message);
				// An error happened.
			});
	};
	return (
		<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
			<Container>
				<span className="px-2">
					<div className="avatar">
						<div className="w-12 mask mask-hexagon">
							<img src="logo.png" alt="" />
						</div>
					</div>
				</span>
				<Navbar.Brand to="/home">English Learning </Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link className="text-white">
							<NavLink
								variant="dark"
								className="Nav.Link px-2 text-decoration-none text-white "
								to="/home">
								Home
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/courses">
								Courses
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/blog">
								Blog
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/signup">
								Signup
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/login">
								Login
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/faq">
								FAQ
							</NavLink>
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link eventKey={2} href="#memes">
							{user?.displayName} {user?.email}
						</Nav.Link>
						<span className="px-2">
							<div className="avatar">
								<div className="w-12 mask mask-hexagon">
									<img src={user?.photoURL} alt="" />
								</div>
								<button onClick={handleSignouthandle}>
									SignOut
								</button>
							</div>
						</span>
					</Nav>
				</Navbar.Collapse>
				
					
						
						<input
							type="checkbox"
							className="toggle toggle-accent"
							checked
						/>
					
				
			</Container>
		</Navbar>
	);
};

export default Header;
