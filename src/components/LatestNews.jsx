import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex bg-slate-200 p-3 items-center'>
            <p className='bg-[#D72050] px-4 py-2 font-bold text-white'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10 text-black font-semibold'>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum?</Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum?</Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum?</Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum?</Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;