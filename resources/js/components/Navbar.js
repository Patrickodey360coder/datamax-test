import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {  } from 'react-bootstrap'

function Navs() {
  return (
    <Navbar bg="dark"  variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">Patrick Odey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs
