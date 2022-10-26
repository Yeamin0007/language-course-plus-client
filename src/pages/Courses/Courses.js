import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftBar from '../../Bars/LeftSideBar/LeftBar';
import MiddleBar from '../../Bars/MiddleBar/MiddleBar';

const Courses = () => {
    return (
        <Container>
             <Row>
                <Col lg="3" className='d-none d-lg-block'>
                    <LeftBar></LeftBar>
                </Col>
                <Col lg="9">
                    <MiddleBar></MiddleBar>
                </Col>
             </Row>
        </Container>
    );
};

export default Courses;