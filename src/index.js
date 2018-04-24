import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './configs/i18next.config.client';
import { I18nextProvider } from 'react-i18next';
import { ipcRenderer } from './exportHelpers';

import './index.css';

let initialI18nStore = ipcRenderer.sendSync('get-initial-translations');

ipcRenderer.on('language-changed', (event, message) => {
  if (!i18n.hasResourceBundle(message.language, message.namespace)) {
    i18n.addResourceBundle(message.language, message.namespace, message.resource);
  }

  i18n.changeLanguage(message.language);
});

ReactDOM.render(
  <I18nextProvider i18n={ i18n } initialI18nStore={ initialI18nStore } initialLanguage="el">
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);