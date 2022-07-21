import React from 'react';
import promoImg from './assets/images/feature-image.svg';
import Title from '../../components/Title/Title';

const Promo = () => (
  <section className="promo">
    <div className="promo__container">
      <div className="promo__img-wrap">
        <img src={promoImg} alt="feature" />
      </div>
      <div className="promo__content">
        <Title className="promo__title" isWhite>
          SQL Complete killer feature that SSMS lacks since v18
        </Title>
        <p className="promo__subtitle">T-SQL Debugger</p>
        <div className="promo__list-wrap">
          <ul className="promo__list">
            <li className="promo__list-item">create an empty repository from scratch</li>
            <li className="promo__list-item">commit and revert changes</li>
            <li className="promo__list-item">view and resolve conflicts</li>
          </ul>
          <ul className="promo__list">
            <li className="promo__list-item">associate commits with GitHub Issues</li>
            <li className="promo__list-item">make switching between branches</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Promo;
