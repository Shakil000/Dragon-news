import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <section>
                <div className='flex flex-col justify-center items-center py-10'>
                <div>
                <img src={logo} alt="" />
                </div>
                <p className='text-gray-400 py-3'>Journalism Without Fear or Favour</p>
                <p className='text-gray-400'>{moment().format("dddd, MMMM Do YYYY")}</p>
                </div>
            </section>
        </div>
    );
};

export default Header;