import React, { useState } from 'react';

import classNames from 'classnames';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavItem from '../Nav/NavItem';
import Menu from '../Menu/Menu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import navData from './assets/constants';

const Header = () => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Nav className={classNames('header__nav', { 'header__nav--mobile-open': isBurgerActive })}>
          {navData.map((navItem) => (
            <NavItem
              key={navItem.id}
              withImage={navItem.withImage}
              src={navItem.withImage}
              href={navItem.href}
              alt={navItem.alt}
              text={navItem.text}
            />
          ))}
        </Nav>
        <Menu />
        <BurgerMenu isBurgerActive={isBurgerActive} setBurgerActive={setBurgerActive} />
      </div>
    </header>
  );
};

export default Header;
