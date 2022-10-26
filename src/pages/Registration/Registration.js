import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Registration = () => {
    const[error, setError] =useState('');
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password= form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/login');
            handleUpdateProfile(name ,photoURL);
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        });
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='container bg-dark border border-warning pb-3 border d-flex justify-content-center mt-5'>
         <Form onSubmit={handleSubmit} className='py-5 '>
          <h2 className='text-center pb-3 fw-bold text-warning'>Register Here</h2>

        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className='text-warning'>Your Name (full*)</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter Full Name" required/>
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className='text-warning'>Photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL"/>
        </Form.Group>

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
        <p><small className='text-white'>Already Have an account? <Link className='text-warning' to='/login'>Login</Link></small></p>
        <div className='d-flex justify-content-center'>
        <Button variant="warning" type="submit">
          Register
        </Button>
        </div>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
       </div>
    );
};

export default Registration;