import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const course = useLoaderData();
    const {id, img, title, details} = course;

    return (
        <Container>
            <Card key={id} className="m-5">
        <Card.Header ></Card.Header>
        <Card.Body>
       
        <Card.Title className='fs-2'>{title}</Card.Title>
        <Card.Img variant="top" src={img} style={{height: '650px'}} />
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Container>
    );
};

export default Category;