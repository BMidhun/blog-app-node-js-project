import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavBarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>Blog-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="mx-auto"></div>
          <Nav className="align-items-center">
            <Nav.Item as="li">
              <NavLink
                to="/"
                className={(props) =>
                  `text-decoration-none text-secondary mx-2 ${
                    props.isActive && "text-light"
                  }`
                }
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavLink
                to="/myblogs"
                className={(props) =>
                  `text-decoration-none text-secondary mx-2 ${
                    props.isActive && "text-light"
                  }`
                }
              >
                My Blogs
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavLink
                to="/create-blog"
                className={(props) =>
                  `text-decoration-none text-secondary mx-2 ${
                    props.isActive && "text-light"
                  }`
                }
              >
                Create Blog
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavDropdown
                title="Profile"
                id="collasible-nav-dropdown"
                className="text-secondary"
              >
                <NavDropdown.Item>User</NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
