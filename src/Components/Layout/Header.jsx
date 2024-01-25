import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../redux/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';



const Header = () => {
  const {userInfo} = useSelector(state=> state.auth);
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const handleLogout = () =>{
    signOut(auth). then(()=>{
      dispatch(setUserInfo({}));
      naviagte('/login');
    })
    .catch((e) => {
      toast.error(e.message)
    })
  }
  return (
    <Navbar expand="lg" bg='dark' variant="dark" >
      <Container >
        <Navbar.Brand href="#home">Kitab Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
            {userInfo.uid ?  (
              <Link to="#" onClick={handleLogout} className='nav-link'>Logout</Link>
             

            )
            : (
              <>
              <Link to="/dashboard" className='nav-link'>Dashboard</Link>
              <Link to="/admin-signup" className='nav-link'>Signup</Link>
  
              <Link to="/login" className='nav-link'>Login</Link>
              </>
              

            )}

           
            
         
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header
