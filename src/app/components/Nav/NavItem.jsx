import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

const NavItem = ({ href, text, className, withImage, alt }) => (
  <li className="nav__item">
    <a href={href} className={classNames('nav__link', className)}>
      <span>{text}</span>
      {withImage && <img className="nav__link-icon" src={withImage} alt={alt} />}
    </a>
  </li>
);

export default NavItem;

NavItem.defaultProps = {
  className: '',
  withImage: '',
  alt: '',
};

NavItem.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
  className: string,
  withImage: string,
  alt: string,
};
