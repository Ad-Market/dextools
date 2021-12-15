import React, {useState} from 'react';
import { FaAngleDown, FaChartArea, FaChartBar, FaChartLine, FaCogs, FaColumns, FaDollarSign, FaHome, FaLink, FaShip, FaSitemap, FaUser, FaWpexplorer } from 'react-icons/fa';

import ethIcon from '../../../assets/img/ethereum.svg'
import bscIcon from '../../../assets/img/bsc.svg'
import polygon from '../../../assets/img/polygonscan.svg'
import fantom from '../../../assets/img/fantom.png'
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/img/logo.png';

import iHome from '../../../assets/img/icons/icon-home.png';
import iEth from '../../../assets/img/icons/icon-eth.png';
import iBsc from '../../../assets/img/icons/icon-bsc.png';
import iLNP from '../../../assets/img/icons/icon-lnp.png';
import iMultiswap from '../../../assets/img/icons/icon-multiswap.png';
import iPE from '../../../assets/img/icons/icon-pairexplorer.png';
import iBWAP from '../../../assets/img/icons/icon-bigswap.png';
import iChart from '../../../assets/img/icons/icon-chart.png';
import iFantom from '../../../assets/img/icons/icon-fantom.png';
import iPolygon from '../../../assets/img/icons/icon-polygon.png';
import iPBot from '../../../assets/img/icons/icon-pairbot.png';
import iPrice from '../../../assets/img/icons/icon-price.png';
import iSetting from '../../../assets/img/icons/icon-setting.png';
import iUser from '../../../assets/img/icons/icon-user.png';

const Sidebar = () => {

    const [collapse, setCollapse] = useState(Array(10).fill(true));

    const toggleCollapse = (index) => {
        console.log(collapse);
        const prevStat = collapse[index];
        if (!prevStat) {          /// if expanded already close all
            setCollapse(Array(10).fill(true))
        } else {
            let tmp = Array(10).fill(true);
            tmp[index] = false;
            setCollapse(tmp);
        }
    }

    return (
        <div className="main-sidebar hover:w-60">
            <div className={`main-navbar mt-3 mb-1 ${collapse ? 'expand': ''}`}>
                <div className='flex items-center text-white'>
                    <img src={logoImg} className='logo'/>
                    <span className='text-2xl ml-2'>GRYPTOGEMS</span>
                </div>
            </div>
            <div className=''>
                <div className='sidebar-section'>BOARD</div>

                <Link to="/" className='menu-item flex items-center'>
                    <img className='menu-item-icon' src={iHome}/>
                    <span className='chain-text chain-text-transition'>CRYPTOGEMS BOARD</span>
                </Link>

                <h4 className="sidebar-menu" onClick={() => toggleCollapse(0)}>
                    <img src={iEth} alt="eth chain" className="chain-icon ml-1 mr-2" />
                    <span className="mr-1 ml-2 chain-text chain-text-transition">ETH</span>
                    <FaAngleDown className={`arrow-icon`} />
                </h4>

                <div className={`menu-items eth ${collapse[0] ? 'collapse' : ''}`}>
                    <Link to="/eth/live_new_pairs" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iLNP}/>
                        <span className='chain-text chain-text-transition'><i>Live New Pairs</i></span>
                    </Link>

                    <Link to="/eth/pair_explorer" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPE}/>
                        <span className='chain-text chain-text-transition'>Pair Explorer</span>
                    </Link>

                    <Link to="/eth/big_swap_explorer" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iBWAP}/>
                        <span className='chain-text chain-text-transition'>Big Swap Explorer</span>
                    </Link>

                    <Link to="/eth/multiswap" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iMultiswap}/>
                        <span className='chain-text chain-text-transition'>MultilSwap</span>
                    </Link>

                    <Link to="/eth/new_pairs_bot" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPBot}/>
                        <span className='chain-text chain-text-transition'>New Pairs Bot</span>
                    </Link>

                    <Link to="/" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPrice}/>
                        <span className='chain-text chain-text-transition'>Price Bot</span>
                    </Link>
                </div>

                <h4 className="sidebar-menu" onClick={() => toggleCollapse(1)}>
                    <img src={iBsc} alt="eth chain" className="chain-icon ml-1 mr-2" />
                    <span className="mr-1 ml-2 chain-text chain-text-transition">BSC</span>
                    <FaAngleDown className={`arrow-icon`} />
                </h4>

                <div className={`menu-items bsc ${collapse[1] ? 'collapse' : ''}`}>
                    <Link to="/bsc/live_new_pairs" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iLNP}/>
                        <span className='chain-text chain-text-transition'><i>Live New Pairs</i></span>
                    </Link>

                    <Link to="/bsc/pair_explorer" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPE}/>
                        <span className='chain-text chain-text-transition'>Pair Explorer</span>
                    </Link>

                    <Link to="/bsc/multiswap" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iMultiswap}/>
                        <span className='chain-text chain-text-transition'>MultilSwap</span>
                    </Link>

                    <Link to="/" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPBot}/>
                        <span className='chain-text chain-text-transition'>New Pairs Bot</span>
                    </Link>

                    <Link to="/" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPrice}/>
                        <span className='chain-text chain-text-transition'>Price Bot</span>
                    </Link>
                </div>

                <h4 className="sidebar-menu" onClick={() => toggleCollapse(2)}>
                    <img src={iPolygon} alt="eth chain" className="chain-icon ml-1 mr-2" />
                    <span className="mr-1 ml-2 chain-text chain-text-transition">Polygon</span>
                    <FaAngleDown className={`arrow-icon`} />
                </h4>

                <div className={`menu-items polygon ${collapse[2] ? 'collapse' : ''}`}>
                    <Link to="/polygon/live_new_pairs" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iLNP}/>
                        <span className='chain-text chain-text-transition'><i>Live New Pairs</i></span>
                    </Link>

                    <Link to="/polygon/pair_explorer" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPE}/>
                        <span className='chain-text chain-text-transition'>Pair Explorer</span>
                    </Link>

                    <Link to="/bsc/multiswap" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iMultiswap}/>
                        <span className='chain-text chain-text-transition'>MultilSwap</span>
                    </Link>

                    <Link to="/" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPBot}/>
                        <span className='chain-text chain-text-transition'>New Pairs Bot</span>
                    </Link>

                    <Link to="/" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPrice}/>
                        <span className='chain-text chain-text-transition'>Price Bot</span>
                    </Link>
                </div>

                <h4 className="sidebar-menu" onClick={() => toggleCollapse(3)}>
                    <img src={iFantom} alt="eth chain" className="chain-icon ml-1 mr-2" />
                    <span className="mr-1 ml-2 chain-text chain-text-transition">Fantom</span>
                    <FaAngleDown className={`arrow-icon`} />
                </h4>

                <div className={`menu-items fantom ${collapse[3] ? 'collapse' : ''}`}>
                    <Link to="/fantom/live_new_pairs" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iLNP}/>
                        <span className='chain-text chain-text-transition'><i>Live New Pairs</i></span>
                    </Link>

                    <Link to="/fantom/pair_explorer" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPE}/>
                        <span className='chain-text chain-text-transition'>Pair Explorer</span>
                    </Link>

                    <Link to="/" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iMultiswap}/>
                        <span className='chain-text chain-text-transition'>MultilSwap</span>
                    </Link>

                    <Link to="/" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPBot}/>
                        <span className='chain-text chain-text-transition'>New Pairs Bot</span>
                    </Link>

                    <Link to="/" className='menu-item flex items-center'>
                        <img className='menu-item-icon' src={iPrice}/>
                        <span className='chain-text chain-text-transition'>Price Bot</span>
                    </Link>
                </div>

                <div className='sidebar-section'>OTHERS</div>

                <Link to="/stats" className='menu-item flex items-center'>
                    <img className='menu-item-icon' src={iChart}/>
                    <span className='chain-text chain-text-transition'>Stats</span>
                </Link>

                {/* <Link to="/charts/0x7143370991baeab1ff7e69f40f15eb3504072012" className='menu-item flex items-center'>
                    <img className='menu-item-icon' src={iChart}/>
                    <span className='chain-text chain-text-transition'>Charts</span>
                </Link> */}

                <Link to="/mutlicharts" className='menu-item flex items-center'>
                    <img className='menu-item-icon' src={iChart}/>
                    <span className='chain-text chain-text-transition'>Multi Charts</span>
                </Link>

                <Link to="/" className='menu-item flex items-center'>
                    <img className='menu-item-icon' src={iUser}/>
                    <span className='chain-text chain-text-transition'>User Account</span>
                </Link>

                <Link to="/" className='menu-item flex items-center'>
                    <img className='menu-item-icon' src={iSetting}/>
                    <span className='chain-text chain-text-transition'>Configuration</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;