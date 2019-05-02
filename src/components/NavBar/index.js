import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './styles.css';


function NavBar() {
  return (
    <Navbar className={'customNavBar'} bg="light" expand="lg">
      <Navbar.Brand href="/">Google Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
