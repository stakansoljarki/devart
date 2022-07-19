import React from "react";
import SvgIcon from "./SvgIcon";

const ArrowIcon = ({className}) => {
    return(
        <SvgIcon className={className} width="18" height="18" viewBox="0 0 18 18">
            <path
                fill-rule="evenodd" clip-rule="evenodd" d="m13.125 6 1.125 1.125L9.375 12 4.5 7.125 5.625 6l3.75 3.75L13.125 6Z" fill="#fff"
            />
        </SvgIcon>
    )
}

export default ArrowIcon;
