import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';                                 //provider is going to keep track of that store wich is that global state and thas allows to acces that store from anywhere inside of the app
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import App from './App';

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

//borrar este texto
const store = createStore(reducers, compose(applyMiddleware(thunk)));      //A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
  </Provider>,
  document.getElementById('root'), 
);