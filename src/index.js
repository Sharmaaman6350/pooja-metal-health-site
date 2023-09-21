import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <ToastContainer autoClose={1500} />
  </>

);
