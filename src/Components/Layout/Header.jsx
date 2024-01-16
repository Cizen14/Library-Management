import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dashboard from '../../assets/Pages/Dashboard/Dashboard';



const Header = () => {
  return (
    <Navbar expand="lg" bg='dark' variant="dark" >
      <Container >
        <Navbar.Brand href="#home">Kitab Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/dashboard" className='nav-link'>Dashboard</Link>
            <Link to="/admin-signup" className='nav-link'>Signup</Link>
            <Link to="/login" className='nav-link'>Login</Link>
         
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header
