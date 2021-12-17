import { useEffect, useState } from 'react';
import TokenApi from '../../../../apis/token_api';
import bscscanImg from '../../../../assets/img/bscscan.png'
import { numberWithCommas, tokenAddress } from '../../../../utils/helper';

const PriceChartLpInfo = ({selectedPair}) => {
    
    const [lpAmount, setLpAmount] = useState(false);

    useEffect(() => {
        TokenApi.getLPInfo(selectedPair.pair_address).then(res => {
            if (res.data) {
                console.log(res.data);
                const decimal = Number(res.data.decimal)
                
                const amount = res.data.balance / Math.pow(10, decimal);

                setLpAmount(amount);

                
            }
        })
    }, [selectedPair])

    return (
        <div className='bg-gradient rounded p-5'>
            <div className='font-bold text-xl'>LP Info
                <a href={'https://bscscan.com/token/' + selectedPair.pair_address} target="_blank" className='inline-block align-bottom ml-3' style={{width: '25px'}}><img src={bscscanImg} /></a>
            </div>
            <div className='mt-2'>
                <span className='font-bold'>LP Token Address</span>: {tokenAddress(selectedPair.pair_address)}
            </div>

            <div className='mt-2'>
                <span className='font-bold'>{selectedPair.token1_symbol} Amount</span>: {lpAmount ? numberWithCommas(lpAmount) : '0'} {selectedPair.token1_symbol}
            </div>
            
        </div>
    )
}

export default PriceChartLpInfo;