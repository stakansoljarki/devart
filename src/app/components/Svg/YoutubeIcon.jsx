import React from "react";
import SvgIcon from "./SvgIcon";

const YoutubeIcon = ({className}) => {
    return(
        <SvgIcon className={className} width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M17.711 6.123c-2.703-.164-8.723-.164-11.422 0C3.366 6.3 3.022 7.869 3 12c.022 4.123.363 5.7 3.289 5.877 2.7.164 8.72.164 11.422 0C20.634 17.7 20.978 16.131 21 12c-.022-4.123-.363-5.7-3.289-5.877ZM9.75 14.667V9.333l6 2.662-6 2.672Z" fill="#fff" opacity=".6"
            />
        </SvgIcon>
    )
}

export default YoutubeIcon;
