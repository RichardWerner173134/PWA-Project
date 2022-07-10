import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {createGlobalState } from 'react-hooks-global-state';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const { setGlobalState, useGlobalState } = createGlobalState({
  isLoggedIn: false,
  jwtToken: '',
  username: '',
  vorname: '',
  nachname: '',
  profilbild: null
});

const serviceWorker = null;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

serviceWorkerRegistration.register();


export {useGlobalState, setGlobalState };