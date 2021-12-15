import React, {useState} from 'react';
import { FaAngleDown } from 'react-icons/fa';

const TokenInput = ({token_name, balance, hasMax, amount}) => {
    return (
        <div className='token-input'>
            <div className='flex rounded bg-blue-600 bg-opacity-60 p-4'>
                <div className='left'>
                    <span className='text-xl mr-1'>{token_name}</span>
                    <span><FaAngleDown className='inline-block align-baseline pt-1 font-thin'/></span>
                    <div className='balance text-xs'>
                        <span>Balance: {balance}</span>
                    </div>
                </div>
                <div className='right text-right flex-1'>
                    <span className='text-xl'>{amount}</span>
                </div>
            </div>
        </div>
    )
}

export default TokenInput;