import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftBar from '../LeftSideBar/LeftBar';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/" className='text-decoration-none text-warning fs-2'>CoursePlus</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link><Link className='text-decoration-none text-white' to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to="/courses">Courses</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to="/blog">Blog</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to="/faq">FAQ</Link></Nav.Link>
            <NavDropdown className='d-lg-none' title="List" id="collasible-nav-dropdown">
              <LeftBar></LeftBar>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;