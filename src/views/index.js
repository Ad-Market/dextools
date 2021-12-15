import React, { useEffect } from 'react';
import { withCookies } from 'react-cookie';

import { useTradingviewContext } from '../context/TradingviewContext';
import Layout from './layout';

function Views(props) {
  const {setTradingViewReady} = useTradingviewContext(false);

  window.TradingView.onready(() => {
      // console.log('tradingview ready', true);
      setTradingViewReady(true);
  });

  return (
    <div className='app flex relative'>
      <Layout></Layout>
    </div>
  );
}

export default withCookies(Views);