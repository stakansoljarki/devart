import React from "react";

const SvgIcon = ({className, viewBox, width, height, children}) => {
    return(
        <svg className={className} viewBox={viewBox} width={width} height={height}>
            {children}
        </svg>
    )
}

export default SvgIcon;
