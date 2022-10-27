import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

const LeftBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://course-plus-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h4 className='fs-2 my-4'>Courses</h4>
            <div>
            {
             categories.map(category =><ListGroup>
                <ListGroup.Item className='mb-2' key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-dark fs-6 fw-bold '>
                        {category.name}
                    </Link>
                    </ListGroup.Item>
                </ListGroup>)   
            }
            </div>
        </div>
    );
};

export default LeftBar;

