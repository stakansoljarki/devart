import React from 'react';
import classNames from 'classnames';

import { bool, string } from 'prop-types';
import Link from '../Link/Link';

import doneIcon from '../../layouts/Offer/assets/images/done-icon.svg';
import messageIcon from '../../layouts/Offer/assets/images/message-icon.svg';

const OfferCard = ({
  className,
  logo,
  title,
  description,
  withList,
  withLink,
  isBlue,
  isTransparent,
  linkText,
}) => (
  <div className={classNames('offer-card', className)}>
    <div className="offer-card__logo-wrap">
      <img className="offer-card__logo" src={logo} alt="message logo" />
    </div>
    <div className="offer-card__info">
      <h4 className="offer-card__title">{title}</h4>
      <p className="offer-card__description">{description}</p>
      {withList && (
        <ul className="offer-card__list">
          <li className="offer-card__item">
            <a className="offer-card__link" href="/">
              <img className="offer-card__icon" src={doneIcon} alt="logo" />
              <span>Purchasing FAQ</span>
            </a>
          </li>
          <li className="offer-card__item">
            <a className="offer-card__link" href="/">
              <img className="offer-card__icon" src={messageIcon} alt="logo" />
              <span>sales@devart.com</span>
            </a>
          </li>
        </ul>
      )}
      {withLink && (
        <Link href="/" className="offer-card__button" isBlue={isBlue} isTransparent={isTransparent}>
          {linkText}
        </Link>
      )}
    </div>
  </div>
);

export default OfferCard;

OfferCard.defaultProps = {
  className: '',
  withList: false,
  withLink: false,
  isBlue: false,
  isTransparent: false,
  linkText: '',
};

OfferCard.propTypes = {
  className: string,
  logo: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  withList: bool,
  withLink: bool,
  isBlue: bool,
  isTransparent: bool,
  linkText: string,
};
