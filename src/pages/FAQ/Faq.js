import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <Accordion defaultActiveKey="0" className='container mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How old do I have to be to partricipate ia a language course?</Accordion.Header>
        <Accordion.Body className='bg-dark text-warning'>
        Our normal language courses are recommended for participants aged between 6 and 15 years old
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What languages do you teach?</Accordion.Header>
        <Accordion.Body className='bg-dark text-info'>
          1.English 2.German 3.Italiano 4.Dutch 5.Japanese 6.Arabic 7.Spanish ...
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are there any language course for absulate biginners?</Accordion.Header>
        <Accordion.Body className='bg-dark text-warning'>
        We have a well experienced team in teaching second languages which follows so modern strategies in teaching using ,for instance, the TPR  which is able to guarantee the communication between the student and the teacher even if the student doesn’t know a word of the language.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Are the teachers native speakers?</Accordion.Header>
        <Accordion.Body className='bg-dark text-info'>
        es! We have native speaking teachers for the three languages we are providing. As well we have highly qualified teachers from all over the world even if they are not speakers.The Speaking Cats made it clear that the main criteria for us is the high proficiency and teaching experience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Is there a placement test?</Accordion.Header>
        <Accordion.Body className='bg-dark text-warning'>
        Yes. Before starting the course your child is asked to have the placement test online for free.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>How many lessons per week?</Accordion.Header>
        <Accordion.Body className='bg-dark text-info'>
        4 lessons a week
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>How does a lesson last?</Accordion.Header>
        <Accordion.Body className='bg-dark text-warning'>
        The lesson lasts for 25 minutes
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>When do the course start?</Accordion.Header>
        <Accordion.Body className='bg-dark text-info'>
        Our Courses are held all year round. the time the student subscribes he chooses his lessons dates and hours.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default Faq;