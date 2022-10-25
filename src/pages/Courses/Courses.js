import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Courses = () => {
    return (
        <Container>
             <Row>
                <Col lg="4">
                    <h2>side bar</h2>
                </Col>
                <Col lg="8">
                    <h2>main course</h2>
                </Col>
             </Row>
        </Container>
    );
};

export default Courses;