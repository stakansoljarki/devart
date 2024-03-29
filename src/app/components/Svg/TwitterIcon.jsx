import React from 'react';
import { string } from 'prop-types';
import SvgIcon from './SvgIcon';

const TwitterIcon = ({ className }) => (
  <SvgIcon className={className} width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M22 5.894a8.294 8.294 0 0 1-2.357.636 4.058 4.058 0 0 0 1.805-2.235 8.299 8.299 0 0 1-2.606.98A4.127 4.127 0 0 0 15.847 4c-2.65 0-4.596 2.433-3.998 4.959a11.71 11.71 0 0 1-8.457-4.22 4.007 4.007 0 0 0 1.27 5.393 4.136 4.136 0 0 1-1.858-.505c-.045 1.87 1.318 3.622 3.291 4.011-.577.155-1.21.19-1.853.07.521 1.604 2.036 2.771 3.833 2.804A8.344 8.344 0 0 1 2 18.185 11.75 11.75 0 0 0 8.29 20c7.618 0 11.922-6.334 11.663-12.015A8.282 8.282 0 0 0 22 5.895Z"
      fill="#fff"
      opacity=".6"
    />
  </SvgIcon>
);

export default TwitterIcon;

TwitterIcon.defaultProps = {
  className: '',
};

TwitterIcon.propTypes = {
  className: string,
};
