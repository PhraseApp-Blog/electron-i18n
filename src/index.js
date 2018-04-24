import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './configs/i18next.config.client';
import { I18nextProvider } from 'react-i18next';
import { ipcRenderer } from './exportHelpers';

import './index.css';

let initialI18nStore = ipcRenderer.sendSync('get-initial-translations');

ReactDOM.render(
  <I18nextProvider i18n={ i18n } initialI18nStore={ initialI18nStore } initialLanguage={ 'en' }>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);