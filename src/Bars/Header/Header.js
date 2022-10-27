import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import LeftBar from '../LeftSideBar/LeftBar';


const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const [state, setState] = useState(false);

  const handleLogOut =() =>{
    logOut()
    .then(()=> {})
    .catch(error => console.error(error))
  }

  const handleToggle = () => {
    setState(!state);
}
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Image style={{height:'55px'}} roundedCircle src='https://cdn.xxl.thumbs.canstockphoto.com/interrelated-flags-countries-flat-icon-concept-of-language-learning-in-the-form-interrelated-flags-eps-vectors_csp50974833.jpg' ></Image>
        <Navbar.Brand><Link to="/" className='text-decoration-none text-warning fs-2 ms-2'>CoursePlus</Link></Navbar.Brand>
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
          <Button onClick={handleToggle} variant={state ? 'dark' : 'light'}>
                            {state ? <FaMoon></FaMoon> : <FaSun ></FaSun>}
                        </Button>
          <Nav>
            
            <Nav.Link>
            {
                user?.uid ?
               <>
                {
                user?.photoURL?
                <Image style={{height:'35px'}} roundedCircle src={user?.photoURL} title={user.displayName}></Image>
                :
                <FaUser className='text-white me-3'></FaUser>
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