import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Login.css'

const Login = () => {

  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn =() =>{
     providerLogin(googleProvider)
     .then(result =>{
      const user = result.user;
      console.log(user);
     })
     .catch(error => console.error(error))
  }




    return (
       <div className='container bg-dark border border-warning pb-3 border d-flex justify-content-center mt-5 width-box'>
         <Form className='py-5'>
          <h2 className='text-center pb-3 fw-bold text-warning'>Login Here</h2>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className='text-warning'>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
          <Form.Text className="text-white">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='text-warning'>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p><small className='text-white'>Don't Have an account? <Link className='text-warning' to='/register'>Register</Link></small></p>
        <div className='d-flex justify-content-center'>
        <Button variant="warning" type="submit">
          Login
        </Button>
        </div>

        <div className='my-4 d-flex justify-content-center'>
        <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='border border-warning mb-3 rounded-2 bg-light text-success px-5'><FaGoogle className='text-success'></FaGoogle> Login With Google</Button>
                <Button className='border border-warning rounded-2 mb-2 bg-light text-dark px-5'><FaGithub></FaGithub> Login With GitHub</Button>
            </ButtonGroup>
        </div>

      </Form>
       </div>
    );
};

export default Login;