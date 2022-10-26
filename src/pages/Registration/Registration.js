import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registration = () => {
    return (
        <div className='container bg-dark border border-warning pb-3 border w-25 d-flex justify-content-center mt-5'>
         <Form className='py-5'>
          <h2 className='text-center pb-3 fw-bold text-warning'>Login Here</h2>

        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className='text-warning'>Your Name (full*)</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter Full Name" required/>
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className='text-warning'>Photo URL</Form.Label>
          <Form.Control name='PhotoURL' type="text" placeholder="Enter Photo URL" required/>
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
        <div className='d-flex justify-content-center'>
        <Button variant="warning" type="submit">
          Login
        </Button>
        </div>
        <Form.Text className="text-white">
            We'll never share your email with anyone else.
          </Form.Text>
      </Form>
       </div>
    );
};

export default Registration;