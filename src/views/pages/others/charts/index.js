import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TokenApi from '../../../../apis/token_api';

import TokenSearch from '../../../../components/token_search';
import TradingView from '../../../../components/tradingview';
import PriceChartInfo from './info';
import PriceChartLpInfo from './lp_info';

const PageCharts = (props) => {

    const {token} = useParams();

    const [tokenPairs, setTokenPairs] = useState([]);
    const [selectedPair, setSelectedPair] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('get token pair', token);
        TokenApi.getTokenPairs(token).then(res => {
            if (res.data.length > 0) {
                setTokenPairs(res.data);
                setSelectedPair(res.data[0]);
            }
        })
    }, [token])

    useEffect(() => {

    }, [tokenPairs])

    const selectOptions = () => {
        return tokenPairs.map(pair => {
            return (
                <option value={pair.pair_address} key={pair.id}>{pair.token0_symbol}/{pair.token1_symbol}</option>
            )
        })
    }

    const handleSelectChange = (e) => {
        const pair = tokenPairs.filter(p => p.pair_address == e.target.value)[0];
        setSelectedPair(pair);
    }

    const handleTokenSearch = (token_pair) => {
        if (token_pair.value !== token) navigate(`/charts/${token_pair.value}`);
    }

    return (
        <div className='page-charts'>
            <div className='main-content-container p-3'>
                <div className='page-header'>

                    <div className='mt-2'>

                        <TokenSearch handleChange={handleTokenSearch}/>
                        
                        <div className='page-title mt-3'>
                            <div>
                                {selectedPair ? 
                                    <select className='token-select rounded bg-gradient py-2 px-8 text-lg' 
                                        onChange={handleSelectChange}
                                        value={selectedPair.pair_address}
                                    >
                                        {selectOptions()}
                                    </select>
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid mt-4 gap-8 grid-cols-7'>
                    <div className='lg:col-span-5 col-span-7'>
                        {
                            selectedPair ? 
                            <TradingView pair_address={selectedPair.pair_address} symbol={':' + selectedPair.token0_symbol + '/' + selectedPair.token1_symbol}/>
                            : ''
                        }
                        
                    </div>
                    <div className='lg:col-span-2 col-span-7'>
                        { selectedPair ? 
                            <>
                                <div>
                                    <PriceChartInfo selectedPair={selectedPair} />
                                </div>
                                <div className='mt-5'>
                                    <PriceChartLpInfo selectedPair={selectedPair}/>
                                </div>
                            </>
                            : ''
                        }
                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default PageCharts;