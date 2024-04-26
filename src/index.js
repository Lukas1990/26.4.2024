import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

import './reset.css';
import './style.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode> 
);
