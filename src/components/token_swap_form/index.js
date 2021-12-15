import React, {useEffect, useState} from 'react';
import { FaArrowAltCircleDown, FaArrowDown } from 'react-icons/fa';
import TokenInput from '../token_input';

const TokenSwapForm = ({network}) => {
    let external_swap;
    switch(network) {
        case 'bsc':
            external_swap = {
                name: 'Pancakeswap',
                link: 'https://pancakeswap.finance/swap' 
            }; break;
        default:
            break;
    }
    
    useEffect(() => {
        
    }, [])

    return (
        <div className='token-swap-form'>
            <div className='bg-gradient-45 p-4 rounded'>
                <div className='swap-title pt-2 pb-3 border-b border-dashed border-gray-400'>
                    <div className='font-bold text-xl text-gray-900'>SWAP</div>
                    <a href={external_swap.link} target="_blank" className='text-white text-xs'>Or try {external_swap.name}</a>
                </div>

                <div className='mt-5'>
                    <TokenInput token_name="BNB" amount="0.001" balance="0.00001"/>
                </div>

                <div className='text-center'>
                    <FaArrowAltCircleDown className='inline-block text-2xl text-green-900 mt-2'/>
                </div>

                <div className='mt-3'>
                    <TokenInput token_name="DEXT" amount="0.001" balance="0.00001"/>
                </div>

                <div className='button-wrapper mt-5'>
                    <button className='bg-blue-400 hover:bg-blue-400 text-white rounded block w-full py-2'>Connect Wallet</button>
                </div>

                <div className='more-info mt-5'>
                    <div className='flex'>
                        <span className='text-xs'>Price</span>
                        <span className='text-xs flex-1 text-right'>1,003,4905 DEXT</span>
                    </div>

                    <div className='flex mt-1'>
                        <span className='text-xs'>Guaranteed Price</span>
                        <span className='text-xs flex-1 text-right'>903,4905 DEXT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenSwapForm;