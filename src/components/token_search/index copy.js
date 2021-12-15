import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';

const TokenSearch = () => {
    return (
        <div className='search-wrapper w-full flex lg:w-1/2 p-4 rounded-full items-center mt-3'>
            <FaSearch className='text-white inline-block align-baseline'/>
            <input className="bg-opacity-0 bg-white border-0 outline-none px-3 text-white align-text-bottom w-full placeholder-gray-300" 
                placeholder='Search pair by name, symbol, pair contract or token contract'/>
        </div>
    )
}

export default TokenSearch;