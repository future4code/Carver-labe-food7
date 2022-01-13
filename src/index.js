import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalState from "./Global/GlobalState";


ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById('root')
);
