import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Banner from "../../../components/banner";
import routes from "../../../routes";

const getRoutes = () => {
    return routes.map((prop, key) => {
     
        return <Route
                    path={prop.path}
                    element={prop.component}
                    key={key}
                    {...prop}
                />
      
    });
  };
  
const Main = () => {
    return (
        <main>
            <Banner></Banner>
            <Routes>
                {getRoutes()}
            </Routes>
        </main>
    )
}

export default Main;