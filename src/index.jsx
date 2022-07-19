import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.scss';

import Header from "./app/components/Header/Header";
import Product from "./app/layouts/Product/Product";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <Product />
  </React.StrictMode>
);
