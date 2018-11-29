import React, { Component } from 'react';
import logo from './assets/phrase-app-icon.png';
import { I18n } from 'react-i18next';
import i18n from './configs/i18next.config.client';
import './App.css';


class App extends Component {
  render() {
    const toggle = lng => i18n.changeLanguage(lng);

    return (
      <I18n>
        {
          (t) => (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{t('welcomeMessage')}</h2>
              </div>
              <p className="App-intro">
                {t('helloMessage')}
              </p>
              <button
                onClick={() => toggle('el')}>{t('linkEL')}
              </button>
              <button
                onClick={() => toggle('en')}>{t('linkEN')}
              </button>
            </div>
          )
        }

      </I18n>
  );
  }
}

export default App;
