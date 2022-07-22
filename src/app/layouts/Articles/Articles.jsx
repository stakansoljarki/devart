import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import Pagination from '../../components/Pagination/Pagination';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

import articleCardData from './assets/articleCardConstants';

const Articles = () => {
  const [articleCards] = useState(articleCardData);

  return (
    <section className="articles">
      <div className="articles__container">
        <header className="articles__header">
          <Title>Success Stories</Title>
          <Pagination />
        </header>
        <div className="articles__content">
          {articleCards.map((articleCard) => (
            <ArticleCard
              key={articleCard.id}
              imgSrc={articleCard.imgSrc}
              imgAlt={articleCard.imgAlt}
              logoSrc={articleCard.logoSrc}
              logoAlt={articleCard.logoAlt}
              title={articleCard.title}
              description={articleCard.description}
              linkHref={articleCard.linkHref}
              linkSrc={articleCard.linkSrc}
              linkText={articleCard.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
