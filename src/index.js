import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {createGlobalState } from 'react-hooks-global-state';
import * as serviceWorker from "./serviceWorker";

const { setGlobalState, useGlobalState } = createGlobalState({
  isLoggedIn: false,
  jwtToken: '',
  username: '',
  vorname: '',
  nachname: '',
  profilbild: null
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

serviceWorker.register();


export {useGlobalState, setGlobalState };