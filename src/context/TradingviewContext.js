import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const TradingviewContext = createContext();

const TradingviewContextProvider = ({ children }) => {
  const [tradingViewReady, setTradingViewReady] = useState(false);

  return <TradingviewContext.Provider value={{ tradingViewReady, setTradingViewReady }}>
    {children}
  </TradingviewContext.Provider>;
};

TradingviewContextProvider.propTypes = {
  children: PropTypes.object,
};

export default TradingviewContextProvider;
export const useTradingviewContext = () => useContext(TradingviewContext);