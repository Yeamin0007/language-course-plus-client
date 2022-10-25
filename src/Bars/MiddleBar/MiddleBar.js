import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const MiddleBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h4 className='fs-1 text-center'>Learn Language with us</h4>
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 mt-5">
            {
             categories.map(category => 
                <Card style={{ width: '18rem' }} key={category.id}>
                <Card.Img variant="top" src={category.img}style={{height: '150px'}}/>
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Button variant="outline-primary"><Link to={`/category/${category.id}`} className="text-decoration-none text-dark">les goo</Link></Button>
                </Card.Body>
              </Card>
                
                )}
            </div>
            
        </div>
    );
};

export default MiddleBar;