import React, { useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import navbarLogo from '@assets/img/navbar-logo.svg';

// TODO: Optimize navbar logo image for loading

function CustomNavbar() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" id="mainNav">
      <Container>
        <Navbar.Brand href="/">
        <div className="flex flex-col items-center">
          <img style={{ height: '50px', width: '60px' }} src={navbarLogo} alt="..." />
          <h2 className="text-green-600 text-3xl font-bold tracking-tight">SoundSeeker</h2>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Link href="/product">Our Product</Nav.Link>
            <Nav.Link href="#overview">Overview</Nav.Link>
            <Nav.Link href="#EDA">EDA</Nav.Link>
            <Nav.Link href="#mlmodels">Machine Learning Models</Nav.Link>
            <Nav.Link href="#conclusion">Conclusion</Nav.Link>
            <Nav.Link href="#team">Our Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
