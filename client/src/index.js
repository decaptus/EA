import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';                                 //provider is going to keep track of that store wich is that global state and thas allows to acces that store from anywhere inside of the app
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';





import App from './App';
//import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));      //A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), 
);