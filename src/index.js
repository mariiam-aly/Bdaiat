import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './i18next';
ReactDOM.render(
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
    <App />
    </Suspense>
    </BrowserRouter>,
  document.getElementById('root')
);
