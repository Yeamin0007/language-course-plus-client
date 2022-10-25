import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h4 className='fs-2'>Courses</h4>
            <div>
            {
             categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none text-dark fs-5 '>{category.name}</Link></p>)   
            }
            </div>
        </div>
    );
};

export default LeftBar;