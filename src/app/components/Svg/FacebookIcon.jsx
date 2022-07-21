import React from "react";
import SvgIcon from "./SvgIcon";

const FacebookIcon = ({className}) => {
    return(
        <SvgIcon className={className} width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M9.5 8.667H7V12h2.5v10h4.167V12h3.035L17 8.667h-3.333v-1.39c0-.795.16-1.11.929-1.11H17V2h-3.173C10.83 2 9.5 3.32 9.5 5.846v2.82Z" fill="#fff" opacity=".6"
            />
        </SvgIcon>
    )
}

export default FacebookIcon;
