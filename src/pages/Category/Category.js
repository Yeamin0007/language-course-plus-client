import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import Pdf from "react-to-pdf";
import { FaFilePdf } from 'react-icons/fa';

const ref = React.createRef();

const Category = () => {
    const course = useLoaderData();
    const {id, img, title, details} = course;

    return (
        <Container>
            <Card key={id} className="m-5">
        <div className='d-flex justify-content-center bg-secondary'>
        <Card.Header className='fs-4 fw-semibold  text-white ' > Everything You Need to Know About This Course</Card.Header>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <FaFilePdf className='fs-2 mt-2 text-white ms-2' onClick={toPdf}></FaFilePdf>}
      </Pdf>
        </div>
        <Card.Body ref={ref}>
       
        <Card.Title className='fs-2'>{title}</Card.Title>
        <Card.Img className='img-fluid w-100' variant="top" src={img} style={{height: '650px'}} />
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