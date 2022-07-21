import React from 'react';

import Link from '../../components/Link/Link';

import sqlComplete from './assets/images/sql-complete.svg';

const Product = () => (
  <section className="product">
    <div className="product__container">
      <div className="product__content">
        <p className="product__subtitle">Achieve the next level productivity</p>
        <h1 className="product__title">
          dbForge <span className="product__title product__title--medium">SQL Complete</span>
        </h1>
        <p className="product__description">
          An advanced IntelliSense-style code completion add-in for SSMS and VS
        </p>
        <div className="product__link-wrap">
          <Link className="product__link" href="/" isBlue>
            Download
          </Link>
          <Link className="product__link" href="/" isTransparent>
            Buy now
          </Link>
        </div>
      </div>
      <a href="/" className="product__offer-link">
        Free edition available
      </a>
      <div className="product__img-wrap">
        <img src={sqlComplete} alt="sql complete" />
      </div>
    </div>
  </section>
);
export default Product;
