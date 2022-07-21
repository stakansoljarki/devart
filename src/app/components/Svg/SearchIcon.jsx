import React from 'react';
import { string } from 'prop-types';
import SvgIcon from './SvgIcon';

const SearchIcon = ({ className }) => (
  <SvgIcon className={className} width="24" height="24" viewBox="0 0 24 24">
    <path
      d="m20.468 18.043-3.762-3.732a7.284 7.284 0 0 0 1.151-3.939C17.857 6.307 14.525 3 10.428 3 6.332 3 3 6.307 3 10.372c0 4.065 3.332 7.373 7.429 7.373a7.423 7.423 0 0 0 3.796-1.038l3.795 3.766c1.62 1.606 4.069-.822 2.448-2.43Zm-15.165-7.67c0-2.805 2.3-5.087 5.126-5.087 2.826 0 5.126 2.281 5.126 5.086s-2.3 5.087-5.126 5.087c-2.826 0-5.126-2.282-5.126-5.087Z"
      fill="#fff"
    />
  </SvgIcon>
);

export default SearchIcon;

SearchIcon.defaultProps = {
  className: string,
};

SearchIcon.propTypes = {
  className: string,
};
