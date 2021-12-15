import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TokenApi from '../../../../apis/token_api';

import TokenSwapForm from '../../../../components/token_swap_form';
import TokenSearch from '../../../../components/token_search';
import TradingView from '../../../../components/tradingview';
import bscscanImg from '../../../../assets/img/bscscan.png'

const PageCharts = (props) => {

    const {token} = useParams();

    const [tokenPairs, setTokenPairs] = useState([]);
    const [selectedPair, setSelectedPair] = useState();
    const [tokenInfo, setTokenInfo] = useState(false);
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

    useEffect(() => {
        if (selectedPair) {
            // TokenApi.getPirceChartData(selectedPair.pair_address).then(res => {
            //     console.log('chart data: ', res.data);
            // })

            TokenApi.getBSCTokenInfo(selectedPair.token0_address).then(res=> {
                if (res.data.status == '1') {
                    // console.log('token info: ', res.data.result[0]);
                    setTokenInfo(res.data.result[0]);
                }
            })
        }
    }, [selectedPair])

    const selectOptions = () => {
        return tokenPairs.map(pair => {
            return (
                <option value={pair.pair_address} key={pair.id}>{pair.token0_symbol}/{pair.token1_symbol}</option>
            )
        })
    }

    const marketCap = (token) => {
        const tsupply = Number(token.totalSupply).toFixed(2);
        const price = Number(token.tokenPriceUSD);
        return (tsupply * price).toFixed(2);
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
                                <select className='token-select rounded bg-gradient py-2 px-8 text-lg text-white'>
                                    {selectOptions()}
                                </select>
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

                    {/* <TradingView/> */}
                        
                    </div>
                    { tokenInfo ? 
                        <div className='lg:col-span-2 col-span-7'>
                            <div className='bg-gradient rounded p-5'>
                                <div className='font-bold text-xl'>Token Information
                                    <a href={'https://bscscan.com/token/' + tokenInfo.contractAddress} target="_blank" className='inline-block align-bottom ml-3' style={{width: '25px'}}><img src={bscscanImg} /></a>
                                </div>
                                <div className='pl-2'>
                                    <div className='grid grid-cols-2'>
                                        <div className='col-span-1'>
                                            <div className='info-item text-white mt-2'>
                                                <div className='font-bold'>Token Symbol:</div>
                                                <div className='font-bold text-xl'>{tokenInfo.symbol}</div>
                                            </div>
                                        </div>
                                        <div className='col-span-1'>
                                            <div className='info-item text-white mt-2'>
                                                <div className='font-bold'>Token Name:</div>
                                                <div className='font-bold text-xl'>{tokenInfo.tokenName}</div>
                                            </div>
                                        </div>

                                        <div className='col-span-1'>
                                            <div className='info-item text-white mt-3'>
                                                <div className='font-bold'>Total supply:</div>
                                                <div className='text-pink-700 text-xl font-bold'>{Number(tokenInfo.totalSupply).toFixed(0)} {tokenInfo.symbol}</div>
                                            </div>
                                        </div>

                                        <div className='col-span-1'>
                                            <div className='info-item mt-3'>
                                                <div className='font-bold text-white'>Market Cap:</div>
                                                <div className='text-pink-700 text-xl font-bold'>${marketCap(tokenInfo)}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pl-2 mt-4'>
                                        <a href={'https://bscscan.com/token/' + tokenInfo.contractAddress} target="_blank">
                                            <img src={bscscanImg} className='inline-block' style={{width: '20px'}}/>
                                            <span className='ml-2 font-bold align-middle'>{tokenInfo.symbol} Transactions</span>
                                        </a>
                                    </div>

                                    <div className='pl-2 mt-4'>
                                        <a href={'https://bscscan.com/address/' + tokenInfo.contractAddress + '#code'} target="_blank">
                                            <img src={bscscanImg} className='inline-block' style={{width: '20px'}}/>
                                            <span className='ml-2 font-bold align-middle'>{tokenInfo.symbol} Contract</span>
                                        </a>
                                    </div>

                                    <div className='pl-2 mt-4'>
                                        <a href={'https://bscscan.com/token/' + tokenInfo.contractAddress + '#balances'} target="_blank">
                                            <img src={bscscanImg} className='inline-block' style={{width: '20px'}}/>
                                            <span className='ml-2 font-bold align-middle'>{tokenInfo.symbol} Holders</span>
                                        </a>
                                    </div>
                                    

                                    <div className='mt-4 font-bold text-xl mt-7'>Social Links</div>
                                    <div className="grid grid-cols-4 divide-x divide-green-500 px-3 text-center text-blue-900 mb-5">
                                        
                                        {tokenInfo.website ? <div className='mt-2'><a href={tokenInfo.website} target="_blank">Website</a></div> : ''}
                                        {tokenInfo.facebook ? <div className='mt-2'><a href={tokenInfo.facebook} target="_blank">Facebook</a></div> : ''}
                                        {tokenInfo.twitter ? <div className='mt-2'><a href={tokenInfo.twitter} target="_blank">Twitter</a></div> : ''}
                                        {tokenInfo.linkedin ? <div className='mt-2'><a href={tokenInfo.linkedin} target="_blank">LinkedIn</a></div> : ''}
                                        {tokenInfo.telegram ? <div className='mt-2'><a href={tokenInfo.telegram} target="_blank">Telegram</a></div> : ''}
                                        {tokenInfo.discord ? <div className='mt-2'><a href={tokenInfo.discord} target="_blank">Discord</a></div> : ''}
                                        {tokenInfo.blog ? <div className='mt-2'><a href={tokenInfo.blog} target="_blank">Blog</a></div> : ''}
                                        {tokenInfo.slack ? <div className='mt-2'><a href={tokenInfo.slack} target="_blank">Slack</a></div> : ''}
                                        {tokenInfo.github ? <div className='mt-2'><a href={tokenInfo.github} target="_blank">Github</a></div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default PageCharts;