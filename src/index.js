import React from 'react';
import ReactDOM from 'react-dom';


import './index.css'

import App, {store} from './App';
import reportWebVitals from './reportWebVitals';

console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
