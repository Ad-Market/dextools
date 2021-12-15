import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='page-not-found flex w-full h-full items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-yellow-600 text-9xl font-bold'>Oops!</h1>
                <h4 className='mt-6 text-3xl font-bold text-blue-900'>404 - PAGE NOT FOUND</h4>
                <div className='mt-2 font-bold text-lg'>The page you are looking for might hae been removed <br/>had its name changed or is temporarily unavailable</div>
                <Link to="/" className='bg-blue-900 inline-block mt-4 rounded-full text-white px-10 py-2 text-xl'>Go To HomePage</Link>
            </div>
        </div>
    )
}

export default NotFound;