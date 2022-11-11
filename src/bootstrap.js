import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const element = ReactDOM.createRoot(document.getElementById('app-app'));

element.render(
  <React.StrictMode>  
    <App />  
  </React.StrictMode>
);
