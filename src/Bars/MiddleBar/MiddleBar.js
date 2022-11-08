import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const MiddleBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://course-plus-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h4 className='fs-1 text-center fw-bold mt-3 text-info '>Learn Language With Us</h4>
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 mt-5 p-3 shadow">
            {
             categories.map(category => 
                <Card className='shadow' style={{ width: '18rem' }} key={category.id}>
                <Card.Img variant="top" src={category.img}style={{height: '150px'}}/>
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <button className='btn btn-outline-secondary' ><Link to={`/category/${category.id}`} className="text-decoration-none text-dark">Details</Link></button>
                </Card.Body>
              </Card>
                
                )}
            </div>
            
        </div>
    );
};

export default MiddleBar;