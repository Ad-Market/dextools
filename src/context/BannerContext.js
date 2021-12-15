import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const BannerContext = createContext();
const BannerContextProvider = ({ children }) => {
    const [showBanner, setShowBanner] = useState(true);
  
    return <BannerContext.Provider value={{ showBanner, setShowBanner }}>
      {children}
    </BannerContext.Provider>;
};

BannerContextProvider.propTypes = {
children: PropTypes.object,
};

export default BannerContextProvider;
export const useBannerContext = () => useContext(BannerContext);