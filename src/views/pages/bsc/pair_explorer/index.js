import React, {useEffect, useState} from 'react';
import HotPairsHeader from '../../../../components/hot_paris_header';
import TokenAdress from '../../../../components/token_address';
import pancakeswapLogo from '../../../../assets/img/pancakeswap.png'
import bscscanImg from '../../../../assets/img/bscscan.png'
import cmcImg from '../../../../assets/img/cmc-icon-blue.jpeg'
import { FaArrowAltCircleUp, FaRegCopy, FaSearch, FaShareAlt, FaStar } from 'react-icons/fa';
import TokenSwapForm from '../../../../components/token_swap_form';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import rowData from '../../../../assets/data.json';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import TokenSearch from '../../../../components/token_search';

const columns = [
    {key: '', name: 'Date'},
    {key: 'type', name: 'Type'},
    {key: 'price', name: 'Price USD'},
    {key: '', name: 'Price BNB'},
    {key: '', name: 'Amount DEXT'},
    {key: '', name: 'Total BNB'},
    {key: '', name: 'Maker'},
]

const BSCPairExplorer = () => {

    useEffect(() => {
        console.log(rowData);
    }, [])

    const dateValueFormatter = (param) => {
        const date = new Date(param.value);

        const year = date.getFullYear();
        let month = date.getMonth() + 1; month = month < 10 ? '0' + month : month;
        let day = date.getDate(); day = day < 10 ? '0' + day : day;

        const hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

        return `${year}-${month}-${day} ${hh}:${mm}:${ss}`;
    }

    const priceValueFormatter = (param) => {
        return '$' + Number(param.value).toFixed(6);
    }

    const amountValueFormatter = (param) => {
        return Number(param.value).toFixed(6);
    }

    const addressValueFormatter = (param) => {
        
        return param.value.substr(0, 8) + '...' + param.value.substr(param.value.length - 5);
    }

    const rowClassRules = {
        'row-buy': function(params) { return params.data.type === 'buy'; },
    
        'row-sell': function(params) { return params.data.type === 'sell'; },
    
    };

    return (
        <div className='page-bsc-pair-explorer'>
            <HotPairsHeader></HotPairsHeader>
            <div className='main-content-container p-3'>
                <div className='page-header'>

                    <div className='exchange-title'>
                        <span className='exchange-specific-version pancakeswap'>
                            <img className='exchange-logo mr-2' src={pancakeswapLogo}></img>
                            PANCAKESWAP V2 - PAIR EXPLORER
                        </span>
                    </div>


                    <TokenSearch />


                    <div className='mt-2'>
                        
                        <div className='page-title mt-1'>
                            <div>
                                <span className='erc-wallet mr-3'>
                                    <span className='inline-block mr-1'>WBNB/</span>
                                    <strong>DEXT</strong>
                                </span>

                               

                                <div className='inline-block ml-4'>
                                    <span className='inline-block text-green-700 align-bottom'>$0.57994608</span>
                                    <span className='inline-block text-pink-700 ml-1 font-medium text-lg'>(2h: -2.98%)</span>
                                </div>

                                <div className='inline-block ml-4'>
                                    <a className='inline-block mr-1'>
                                        <img src={bscscanImg} />
                                    </a>
                                    <a className='inline-block mr-1'>
                                        <img src={cmcImg} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    

                    
                    </div>

                    

                    
                </div>

                <div className='grid mt-5 gap-8 grid-cols-7'>
                    <div className='lg:col-span-5 col-span-7'>
                        <TradingViewWidget
                            symbol="BINANCE:ETHUSDT"
                            theme={Themes.DARK}
                            autosize
                        />
                    </div>
                    <div className='lg:col-span-2 col-span-7'>
                        <div className=''>
                            <TokenSwapForm network="bsc"></TokenSwapForm>
                        </div>
                    </div>
                    
                </div>

                <div className='grid mt-5 gap-4 grid-cols-4'>
                    <div className='lg:col-span-3 col-span-4'>
                        <div className='bg-gradient rounded'>
                            <div className='history-header p-3 border-b border-gray-600'>
                                <div className='flex items-center'>
                                    <button className='text-white bg-blue-900 rounded-l py-2 px-5 text-xs'>Trade History</button>
                                    <button className='text-white bg-blue-400 rounded-r py-2 px-5 text-xs'>My Position</button>
                                    <span className='ml-4 text-gray-900'>DEXT (256 trades)</span>
                                </div>
                            </div>

                            <div className='table-wrapper p-3 mb-5'  style={{height: '500px'}}>
                                <AgGridReact className="w-full h-full ag-grid-table"  rowClassRules={rowClassRules} rowClass={['custom-row']}
                                    rowData={rowData}>
                                    <AgGridColumn headerName="Date" field="timestamp" valueFormatter={dateValueFormatter} cellClass={['date-time']}></AgGridColumn>
                                    <AgGridColumn headerName="Type" field="type" cellClass={'color-type'}></AgGridColumn>
                                    <AgGridColumn headerName="Price USD" field="price" valueFormatter={priceValueFormatter} cellClass={'color-type'}></AgGridColumn>
                                    <AgGridColumn headerName="Price BNB" field="priceETH" valueFormatter={amountValueFormatter} cellClass={'color-type'}></AgGridColumn>
                                    <AgGridColumn headerName="Amount DEXT" field="amountToken" valueFormatter={amountValueFormatter} cellClass={'color-type'}></AgGridColumn>
                                    <AgGridColumn headerName="Total BNB" field="amountETH" valueFormatter={amountValueFormatter} cellClass={'color-type'}></AgGridColumn>
                                    <AgGridColumn headerName="Maker" field="maker" valueFormatter={addressValueFormatter} cellClass={'maker'}></AgGridColumn>
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-1 col-span-4'>Spansor: Coming Soon</div>
                </div>
            </div>
        </div>
    )
}

export default BSCPairExplorer;