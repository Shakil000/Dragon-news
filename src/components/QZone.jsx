import React from 'react';
import swim from '../assets/swimming.png'
import student from '../assets/class.png'
import playground from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-slate-200 mb-5'>
            <h1 className='font-semibold py-10'>Q-Zone</h1>
            <div className='items-center justify-center'>
                <img src={swim} alt="" />
                <img src={student} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;