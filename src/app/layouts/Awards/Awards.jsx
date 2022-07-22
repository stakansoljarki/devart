import React, { useState } from 'react';
import Title from '../../components/Title/Title';

import cardData from './assets/cardConstants';

const Awards = () => {
  const [cards] = useState(cardData);

  return (
    <section className="awards">
      <div className="awards__container">
        <Title className="awards__title" isWhite>
          Awards & Recognition
        </Title>
        <p className="awards__description">
          dbForge solutions have been consistently recognized for quality, reliability, and
          practical value delivered under sleek user interfaces
        </p>
        <div className="awards__cards-wrap">
          {cards.map((card) => (
            <div key={card.id} className="awards__card">
              <div className="awards__card-img-wrap">
                <img src={card.src} alt={card.alt} className="awards__img" />
              </div>
              <p className="awards__card-name">{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
