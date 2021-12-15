import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const Layout = ({ setLocale }) => {
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleRtlChange = (checked) => {
        setRtl(checked);
        setLocale(checked ? 'ar' : 'en');
    };
    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    
    return (
        <React.Fragment>
            <BrowserRouter>
                <Sidebar 
                    image={image}
                    collapsed={collapsed}
                    rtl={rtl}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Main></Main>
            </BrowserRouter>
        </React.Fragment>
        
    )
}

export default Layout;