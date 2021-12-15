import React, {useState} from 'react';
import { Link, Router } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import sidebarBg from '../../../assets/img/sidebar-bg.jpg';

import {
    FaTachometerAlt,
    FaEthereum,
    FaLink,
    FaWpexplorer,
    FaColumns,
    FaCubes,
    FaDrawPolygon,
    FaChartBar,
    FaUserAlt,
    FaCogs
} from 'react-icons/fa';

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    const intl = useIntl();
    return (
            <ProSidebar
                image={image ? sidebarBg : false}
                // image={false}
                rtl={rtl}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                    >
                        Dex App
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                        >
                            Dashboard<Link to="/" />
                        </MenuItem>
                    </Menu>

                    <Menu iconShape="circle">
                        <SubMenu
                            title={'Eth'}
                            icon={<FaEthereum />}
                        >
                            <MenuItem icon={<FaLink />}>Live New Pairs</MenuItem>
                            <MenuItem icon={<FaWpexplorer />}>Pair Explorer</MenuItem>
                            <MenuItem icon={<FaColumns />}>MultilSwap</MenuItem>
                        </SubMenu>

                        <SubMenu
                            title={'BSC'}
                            icon={<FaCubes />}
                        >
                            <MenuItem icon={<FaLink />}>Live New Pairs<Link to="/bsc/live_new_pairs" /></MenuItem>
                            <MenuItem icon={<FaWpexplorer />}>Pair Explorer<Link to="/bsc/pair_explorer" /></MenuItem>
                            <MenuItem icon={<FaColumns />}>MultilSwap</MenuItem>
                        </SubMenu>

                        <SubMenu
                            title={'Polygon'}
                            icon={<FaDrawPolygon />}
                        >
                            <MenuItem icon={<FaLink />}>Live New Pairs</MenuItem>
                            <MenuItem icon={<FaWpexplorer />}>Pair Explorer</MenuItem>
                            <MenuItem icon={<FaColumns />}>MultilSwap</MenuItem>
                        </SubMenu>
                    </Menu>


                    <Menu>
                        <MenuItem>Others</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FaChartBar />}>Stats</MenuItem>
                        <MenuItem icon={<FaUserAlt />}>User Accout</MenuItem>
                        <MenuItem icon={<FaCogs />}>Setting</MenuItem>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            @Copyright 2021
                        </span>
                </SidebarFooter>
            </ProSidebar>
        
    )
}

export default Sidebar;