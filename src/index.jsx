import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.scss';

import Header from "./app/components/Header/Header";
import Product from "./app/layouts/Product/Product";
import About from "./app/layouts/About/About";
import VideoGuide from "./app/layouts/VideoGuide/VideoGuide";
import Promo from "./app/layouts/Promo/Promo";
import Features from "./app/layouts/Features/Features";
import Indicators from "./app/layouts/Indicators/Indicators";
import Offer from "./app/layouts/Offer/Offer";
import Clients from "./app/layouts/Clients/Clients";
import Awards from "./app/layouts/Awards/Awards";
import Articles from "./app/layouts/Articles/Articles";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <Product />
      <About />
      <VideoGuide />
      <Promo />
      <Features />
      <Indicators/>
      <Offer />
      <Clients />
      <Awards />
      <Articles />
  </React.StrictMode>
);
