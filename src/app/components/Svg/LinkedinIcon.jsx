import React from 'react';
import { string } from 'prop-types';
import SvgIcon from './SvgIcon';

const LinkedinIcon = ({ className }) => (
  <SvgIcon className={className} width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M7.32 5.63c0 .901-.74 1.63-1.653 1.63-.914 0-1.654-.729-1.654-1.63 0-.9.74-1.63 1.654-1.63.913 0 1.653.73 1.653 1.63Zm.013 2.935H4V19h3.333V8.565Zm5.322 0H9.343V19h3.312v-5.478c0-3.045 4.02-3.294 4.02 0V19H20v-6.607c0-5.14-5.948-4.952-7.345-2.422V8.565Z"
      fill="#fff"
      opacity=".6"
    />
  </SvgIcon>
);

export default LinkedinIcon;

LinkedinIcon.defaultProps = {
  className: '',
};

LinkedinIcon.propTypes = {
  className: string,
};
