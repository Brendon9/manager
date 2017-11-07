import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';

import './index.css';
import App from './App';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/en'

window.appLocale = {
  antd: enUS,
  locale: 'en-US',
  data: appLocaleData,
};

const appLocale = window.appLocale;
addLocaleData(appLocale.data);

ReactDOM.render(
  <LocaleProvider locale={appLocale.antd}>
    <IntlProvider locale={appLocale.locale}>
      <App />
    </IntlProvider>
  </LocaleProvider>,
  document.getElementById('root')
);
