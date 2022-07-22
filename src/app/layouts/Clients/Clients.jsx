import React, { useState } from 'react';
import Title from '../../components/Title/Title';

import clientsCardData from './assets/cardConstants';

const Clients = () => {
  const [cards] = useState(clientsCardData);

  return (
    <section className="clients">
      <div className="clients__container">
        <Title className="clients__title">Leading companies choose dbForge Products</Title>
        <div className="clients__cards-wrap">
          {cards.map((card) => (
            <div key={card.id} className="clients__card">
              <img src={card.src} alt={card.alt} className="clients__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
