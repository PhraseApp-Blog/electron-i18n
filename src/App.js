import React, { Component } from 'react';
import logo from './assets/phrase-app-icon.png';
import { I18n } from 'react-i18next';
import './App.css';


class App extends Component {
  render() {
    return (
      <I18n>
        {
          (t, { i18n }) => (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{t('welcomeMessage')}</h2>
              </div>
              <p className="App-intro">
                Hello PhraseApp!
              </p>
            </div>
          )
        }

      </I18n>
  );
  }
}

export default App;
