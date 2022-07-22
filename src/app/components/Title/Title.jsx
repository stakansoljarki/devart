import React from 'react';
import classNames from 'classnames';
import { bool, string } from 'prop-types';

const Title = ({ className, isWhite, children }) => (
  <h3
    className={classNames('title', className, {
      'title--white': isWhite,
    })}
  >
    {children}
  </h3>
);

export default Title;

Title.defaultProps = {
  className: '',
  isWhite: false,
};

Title.propTypes = {
  className: string,
  isWhite: bool,
  children: string.isRequired,
};
