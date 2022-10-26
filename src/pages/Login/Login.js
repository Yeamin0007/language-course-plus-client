import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Login = () => {
  const[error, setError] =useState('');

  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password= form.password.value;
    console.log(email, password);

    loginUser(email, password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace: true});
    })
    .catch(error=> {
        console.error(error)
        setError(error.message);
    });
}



  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn =() =>{
     providerLogin(googleProvider)
     .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true});
     })
     .catch(error => console.error(error))
  }

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
}




    return (
       <div className='container bg-dark border border-warning pb-3 border d-flex justify-content-center mt-5 '>
         <Form onSubmit={handleLogin} className='py-5'>
          <h2 className='text-center pb-3 fw-bold text-warning'>Login Here</h2>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className='text-warning'>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
          
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
                <Button onClick={handleGithubSignIn} className='border border-warning rounded-2 mb-2 bg-light text-dark px-5'><FaGithub></FaGithub> Login With GitHub</Button>
            </ButtonGroup>
        </div>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>

      </Form>
       </div>
    );
};

export default Login;