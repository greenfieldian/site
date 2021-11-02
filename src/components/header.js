import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "../assets/sample-shockmouse-logo.png"

export default function Header() {
    return (
        <Navbar expand="lg" className="border-bottom">
  <Container>
    <Navbar.Brand href="/"><img src={Logo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#link">Partners</Nav.Link>
        <Nav.Link href="">Insights</Nav.Link>
        <Nav.Link href="">Careers</Nav.Link>
        <Nav.Link href="">Get In Touch</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
