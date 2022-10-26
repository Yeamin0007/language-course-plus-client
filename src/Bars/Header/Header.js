import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import LeftBar from '../LeftSideBar/LeftBar';


const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut =() =>{
    logOut()
    .then(()=> {})
    .catch(error => console.error(error))
  }
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
            
            <Nav.Link>
            {
                user?.uid ?
               <>
                {
                user?.photoURL?
                <Image style={{height:'35px'}} roundedCircle src={user?.photoURL}></Image>
                :
                <FaUser className='text-white'></FaUser>
              }
                <Button onClick={handleLogOut} className='mx-3' variant="outline-warning">Logout</Button>
               </>
                :
                <>
                <Button className='mx-2 ' action variant="outline-warning"><Link className='text-decoration-none text-white' to='/login'>Login</Link></Button>
                
                </>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;