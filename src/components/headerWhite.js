import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { GiHamburgerMenu } from "react-icons/gi";


import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "../assets/logo-white.png"

export default function HeaderWhite() {
    return (
        <Navbar expand="lg" variant="light">
  <div className="container">
    <Navbar.Brand href="/"><img src={Logo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-white-toggle"><GiHamburgerMenu size="30"/></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav" className="nav-white-collapse">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
    )
}
