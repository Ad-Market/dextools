import React, {useState} from 'react';

const HotPairsHeader = () => {
    return (
        <div className='hot-pair-header flex w-full'>
            <h4 className='eth-price hidden lg:inline-block text-center'>BNB: $623.65</h4>
            <h4 className='hot-pairs-title text-center'>HOT PAIRS</h4>
            <ul>marquee</ul>
        </div>
    )
}

export default HotPairsHeader;