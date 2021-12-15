import React, {useEffect, useState} from 'react';
import { FaColumns, FaDollarSign, FaLink, FaSearch, FaShip, FaSitemap, FaWallet, FaWpexplorer } from 'react-icons/fa';
import { useBannerContext } from '../../../context/BannerContext';
import logoImg from '../../../assets/img/logo-text.png';
import { Link, useNavigate } from 'react-router-dom';

import iLNP from '../../../assets/img/icons/icon-lnp.png';
import iMultiswap from '../../../assets/img/icons/icon-multiswap.png';
import iPE from '../../../assets/img/icons/icon-pairexplorer.png';
import iBWAP from '../../../assets/img/icons/icon-bigswap.png';
import iPBot from '../../../assets/img/icons/icon-pairbot.png';
import iPrice from '../../../assets/img/icons/icon-price.png';
import iWallet from '../../../assets/img/icons/icon-wallet.png';

import bg1 from '../../../assets/img/bg1.png'
import bg2 from '../../../assets/img/bg2.png'
import bg3 from '../../../assets/img/bg3.png'
import TokenSearch from '../../../components/token_search';

const Dashboard = () => {

    const {setShowBanner} = useBannerContext();
    const navigate = useNavigate();
    useEffect(() => {
        setShowBanner(false);

        return () => {
            console.log('showbanner');
            setShowBanner(true);
        }
    }, [])

    const handleTokenSearch = (token_pair) => {
        if (token_pair.value) navigate(`/charts/${token_pair.value}`);
    }

    return (
        <div className='page-dashboard p-8'>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <div className='col-span-3 lg:col-span-2'>
                    <TokenSearch  handleChange={handleTokenSearch}/>
                </div>
                <div className='col-span-3 lg:col-span-1 hidden lg:block'>
                    <img src={logoImg} />
                </div>
            </div>

            <div className='grid grid-cols-3 gap-10 mt-5'>
                <div className='col-span-3 lg:col-span-1'>
                    <div className='tools p-4 rounded-2xl mb-4'>
                        <div className='text-right text-white text-2xl tools-title'>ETHER Tools</div>

                        <div className='tools-items p-3'>
                            <div className='grid grid-cols-2'>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iLNP}/>
                                    <span>Live New Pairs</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPE}/>
                                    <span>Pair Explorer</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iBWAP}/>
                                    <span>Big Swap Explorer</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                <img className='mr-2 tool-icon' src={iMultiswap}/>
                                    <span>MultiSwap</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                <img className='mr-2 tool-icon' src={iPBot}/>
                                    <span>New Pairs Bot</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPrice}/>
                                    <span>Price Bot</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iWallet}/>
                                    <span>Wallet Info</span>
                                </Link>
                            </div>
                        </div>

                        <img src={bg1} className='tool-bg' />
                    </div>

                    <div className='tools p-4 rounded-2xl mb-4 bg-2'>
                        <div className='text-right text-white text-2xl tools-title'>BSC Tools</div>

                        <div className='tools-items p-3'>
                            <div className='grid grid-cols-2'>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iLNP}/>
                                    <span>Live New Pairs</span>
                                </Link>
                                <Link to="/bsc/pair_explorer" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPE}/>
                                    <span>Pair Explorer</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iMultiswap}/>
                                    <span>MultiSwap</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPBot}/>
                                    <span>New Pairs Bot</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iWallet}/>
                                    <span>Wallet Info</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPrice}/>
                                    <span>Price Bot</span>
                                </Link>
                               
                            </div>
                        </div>

                        <img src={bg2} className='tool-bg' />
                    </div>

                    <div className='tools p-4 rounded-2xl mb-4 bg-3'>
                        <div className='text-right text-white text-2xl tools-title'>Polygon Tools</div>

                        <div className='tools-items p-3'>
                            <div className='grid grid-cols-2'>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iLNP}/>
                                    <span>Live New Pairs</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPE}/>
                                    <span>Pair Explorer</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iMultiswap}/> 
                                    <span>MultiSwap</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPBot}/> 
                                    <span>New Pairs Bot</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iWallet}/>
                                    <span>Wallet Info</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPrice}/> 
                                    <span>Price Bot</span>
                                </Link>
                               
                            </div>
                        </div>

                        <img src={bg3} className='tool-bg' />

                    </div>

                    <div className='tools p-4 rounded-2xl bg-4'>
                        <div className='text-right text-white text-2xl tools-title'>Fantom Tools</div>

                        <div className='tools-items p-3'>
                            <div className='grid grid-cols-2'>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iLNP}/>
                                    <span>Live New Pairs</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPE}/>
                                    <span>Pair Explorer</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iMultiswap}/>
                                    <span>MultiSwap</span>
                                </Link>
                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPBot}/>
                                    <span>New Pairs Bot</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iWallet}/>
                                    <span>Wallet Info</span>
                                </Link>

                                <Link to="/" className='col-span-1 flex items-center text-white text-lg mb-2'>
                                    <img className='mr-2 tool-icon' src={iPrice}/>
                                    <span>Price Bot</span>
                                </Link>
                               
                            </div>
                        </div>

                        <img src={bg3} className='tool-bg' />
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-1'>
                    <div className=' p-4 rounded-2xl mb-4 bg-gradient-180 h-full'>
                        <div className='text-right text-white text-2xl'>HOT PAIRS</div>
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-1'>
                    <div className=' p-4 rounded-2xl mb-4 bg-gradient-180 h-full'>
                        <div className='text-right text-white text-2xl'>FEATURED SPONSORS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;