import React from 'react';
import { node, string } from 'prop-types';

const SvgIcon = ({ className, viewBox, width, height, children }) => (
  <svg className={className} viewBox={viewBox} width={width} height={height}>
    {children}
  </svg>
);

export default SvgIcon;

SvgIcon.defaultProps = {
  className: '',
};

SvgIcon.propTypes = {
  className: string,
  viewBox: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
  children: node.isRequired,
};
