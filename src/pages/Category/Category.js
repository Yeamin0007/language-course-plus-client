import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Category = () => {
    const course = useLoaderData();
    const {id, img, title, details} = course;

    return (
        <Container>
            <Card key={id} className="m-5">
        <Card.Header className='fs-4 fw-semibold text-center text-white bg-secondary' > Everything You Need to Know About This Course</Card.Header>
        <Card.Body>
       
        <Card.Title className='fs-2'>{title}</Card.Title>
        <Card.Img variant="top" src={img} style={{height: '650px'}} />
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="outline-warning"><Link className='text-decoration-none text-dark' to={`/checkout/${id}`}>Get premium access.</Link></Button>
        </Card.Body>
        </Card>
        </Container>
    );
};

export default Category;