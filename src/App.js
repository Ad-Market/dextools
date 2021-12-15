import React, { Suspense, useEffect, useState } from 'react';
import { CookiesProvider } from 'react-cookie';

import AppContextProvider from './context/AppContext';
import UserContextProvider from './context/UserContext';
import { IntlProvider } from 'react-intl';
import Views from './views';
import messages from './lang';

import './assets/scss/custom.scss';
import BannerContextProvider from './context/BannerContext';
import TradingviewContextProvider from './context/TradingviewContext';

function App() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    document.title = 'Cryptogems';
  }, []);

  return (
      <CookiesProvider>
        <AppContextProvider>
          <BannerContextProvider>
            <UserContextProvider>
              <TradingviewContextProvider>
                <Suspense fallback={null}>
                  <IntlProvider locale={locale} messages={messages[locale]}>
                    <Views />
                  </IntlProvider>
                </Suspense>
              </TradingviewContextProvider>
            </UserContextProvider>
          </BannerContextProvider>
        </AppContextProvider>
      </CookiesProvider>
  );
}

export default App;