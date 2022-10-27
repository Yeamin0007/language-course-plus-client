import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";



const Checkout = () => {
    const checkout = useLoaderData();
    const {title, img, price, rating} = checkout;

    return (
        <Container className='d-flex justify-content-center my-5'>
            <Card style={{ width: '50rem' }}>
        
        <Card.Body>
        <Card.Title className='fs-2'>{title}</Card.Title>
        <Card.Img variant="top" src={img} style={{height: '250px'}} />
            
        <div className='d-flex justify-content-between my-4'>
             <span className='fw-bold'>price: ${price}</span>
        <div className='d-flex align-items-center'>

            <span className='me-2'>Rating :{rating}</span>
            <FaStar></FaStar>
            
        </div>
        
        </div>
        <Button variant="outline-secondary">Purchess Now</Button>
            </Card.Body>
        </Card>

        </Container>
        
    );
};

export default Checkout;