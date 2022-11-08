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
            <div className='mt-4 '>
                <video className='w-100 rounded-3 d-none d-lg-block' controls src='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/sleek-welcome-background_wyfvvvz-s__f1bb1126d621e8323d2d2713ce6308bb__P360.mp4' ></video>
            </div>
            <h4 className='fs-2 my-4 text-center text-info'>Courses</h4>
            <div>
            {
             categories.map(category =><ListGroup>
                <ListGroup.Item className='mb-2 shadow-sm text-center' key={category.id}>
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

