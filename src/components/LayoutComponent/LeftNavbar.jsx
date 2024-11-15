import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [Category, setCategory] = useState([]);

useEffect( () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then((res) => res.json())
    .then((data) => setCategory(data.data.news_category))
} ,[])

    return (
        <div>
            <h1 className='font-semibold mb-5'>All Category</h1>
            <div className='flex flex-col py-10 gap-3'>
                {
                    Category.map((category,i) => <NavLink 
                    to={`/category/${category.category_id}`} 
                    className='btn' key={i}>
                    {category.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;