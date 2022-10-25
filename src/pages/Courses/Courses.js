import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftBar from '../../Bars/LeftSideBar/LeftBar';

const Courses = () => {
    return (
        <Container>
             <Row>
                <Col lg="3">
                    <LeftBar></LeftBar>
                </Col>
                <Col lg="9">
                    <h2>main course</h2>
                </Col>
             </Row>
        </Container>
    );
};

export default Courses;