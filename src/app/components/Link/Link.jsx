import React from 'react';
import classNames from 'classnames';
import { bool, string } from 'prop-types';

const Link = ({
  children,
  className,
  isBlue,
  isTransparent,
  isGreen,
  isBordered,
  isWhite,
  href,
}) => (
  <a
    className={classNames('link', className, {
      'link--blue': isBlue,
      'link--transparent': isTransparent,
      'link--green': isGreen,
      'link--bordered': isBordered,
      'link--white': isWhite,
    })}
    href={href}
  >
    {children}
  </a>
);

export default Link;

Link.defaultProps = {
  isBlue: false,
  isTransparent: false,
  isGreen: false,
  isBordered: false,
  isWhite: false,
};

Link.propTypes = {
  children: string.isRequired,
  className: string.isRequired,
  isBlue: bool,
  isTransparent: bool,
  isGreen: bool,
  isBordered: bool,
  isWhite: bool,
  href: string.isRequired,
};
