import React from 'react';
import classNames from 'classnames';
import { bool, func } from 'prop-types';

const BurgerMenu = ({ isBurgerActive, setBurgerActive }) => {
  const handleClick = () => {
    setBurgerActive((current) => !current);
  };

  return (
    <button
      className={classNames('burger-menu', { 'burger-menu--active': isBurgerActive })}
      onClick={handleClick}
      type="button"
    >
      <span className="burger-menu__item" />
    </button>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  isBurgerActive: bool.isRequired,
  setBurgerActive: func.isRequired,
};
