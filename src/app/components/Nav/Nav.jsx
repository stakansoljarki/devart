import React from 'react';
import classNames from 'classnames';
import { node, string } from 'prop-types';

const Nav = ({ className, children }) => (
  <nav className={classNames('nav', className)}>
    <ul className="nav__list">{children}</ul>
  </nav>
);

export default Nav;

Nav.defaultProps = {
  className: '',
};

Nav.propTypes = {
  className: string,
  children: node.isRequired,
};
