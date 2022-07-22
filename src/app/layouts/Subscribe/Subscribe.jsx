import React from 'react';

const Subscribe = () => (
  <section className="subscribe">
    <div className="subscribe__container">
      <h3 className="subscribe__title">
        Subscribe for monthly digest to get{' '}
        <span className="subscribe__description">special offers</span>
      </h3>
      <form action="" className="subscribe__form">
        <input className="subscribe__form-input" placeholder="Enter your email" type="email" />
        <button className="subscribe__form-button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default Subscribe;
