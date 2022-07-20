import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.scss';

import Header from "./app/components/Header/Header";
import Product from "./app/layouts/Product/Product";
import About from "./app/layouts/About/About";
import VideoGuide from "./app/layouts/VideoGuide/VideoGuide";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <Product />
      <About />
      <VideoGuide />
  </React.StrictMode>
);
