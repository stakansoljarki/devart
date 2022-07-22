import React from 'react';
import { string } from 'prop-types';

const ArticleCard = ({
  imgSrc,
  logoSrc,
  logoAlt,
  title,
  description,
  linkHref,
  linkSrc,
  linkText,
}) => (
  <div className="article-card">
    <div className="article-card__img-wrap">
      <img src={imgSrc} alt="background" className="article-card__img" />
      <img src={logoSrc} alt={logoAlt} className="article-card__logo" />
    </div>
    <h4 className="article-card__title">{title}</h4>
    <p className="article-card__description">{description}</p>
    <a href={linkHref} className="article-card__link">
      <img src={linkSrc} alt="product logo" className="article-card__link-logo" />
      {linkText}
    </a>
  </div>
);

export default ArticleCard;

ArticleCard.propTypes = {
  imgSrc: string.isRequired,
  logoSrc: string.isRequired,
  logoAlt: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  linkHref: string.isRequired,
  linkSrc: string.isRequired,
  linkText: string.isRequired,
};
