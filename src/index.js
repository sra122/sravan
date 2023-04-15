import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "uikit/dist/js/uikit.min.js"; 
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/css/uikit.min.css";
import  "uikit/dist/js/uikit-icons.min.js"
import "uikit/dist/js/uikit.js"
import Navigation from './navigation/Navigation';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation />
    <App />
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
