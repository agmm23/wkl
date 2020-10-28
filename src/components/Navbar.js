import React from 'react';
// import { connect } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image';
import logo from '../img/logo.png'

const NavBar = () => {
  return (
    <div className="ui top menu">
      <div className="item">
        <img className="ui mini circular image" src={logo} />
      </div>
      <a className="item">Planificacion</a>
      <a className="item">Entrenamientos</a>
      <a className="item">Deportistas</a>
      <a className="item">Reportes</a>
      <a className="item">Comunicaciones</a>
      <a className="item">Scouting</a>
    </div>)




{/* <Container>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
  <Navbar.Brand href="#workoutslabs">
      <Image
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        roundedCircle
      />{' '}
      WorkoutsLabs
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#planificacion">Planificacion</Nav.Link>
            <Nav.Link href="#entrenamientos">Entrenamientos</Nav.Link>
            <Nav.Link href="#deportistas">Deportistas</Nav.Link>
            <Nav.Link href="#reportes">Reportes</Nav.Link>
            <Nav.Link href="#comunicaciones">Comunicaciones</Nav.Link>
            <Nav.Link href="#scouting">Scouting</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
</Container> 
  ); */}
};

export default NavBar;