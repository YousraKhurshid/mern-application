import React, { useState, useContext } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { GlobalContext } from '../main';

function NavigationBar() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const {contextData} = useContext(GlobalContext)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navbar'>
        <Link id='logo' style={{ fontFamily: 'PT serif', fontWeight: 'bold', fontSize : '25px' }} className = 'nav-link' to="/">Accerories & Fashion Dame</Link>
        <Link id='logopic' className = 'nav-link border border-light rounded-circle img-fluid' to="/"> <img style={{width:'7vw', height:'15%'}} className="picture rounded-circle" src="src\images\Monogram.jpg" alt="Logo" /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <Link className='nav-link' to="/">Home </Link>
             <Link className='nav-link' to="/products"> Products </Link>
             <div>
             <Link className='nav-link mx-4' to="/user"> <FaUserAlt size='20px'/>{contextData.username}</Link>
             </div>
             <Link className='ms-4 btn btn-success' to="/login"> Login </Link>
             <Link className='ms-4 btn btn-dark' to="/signup"> Signup </Link>
             <Button className='ms-4 btn btn-dark' onClick={handleShowCart}>
            <HiShoppingCart size='25px'/>
          </Button>              
          </Nav>
        </Navbar.Collapse>
        <Offcanvas show={showCart} onHide={handleCloseCart} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Your cart contents */}
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
