import React from "react";
import classNames from "classnames";

const Link = ({children, className, isBlue, isTransparent, isGreen, isWhite, href}) => {
    return(
        <a
            className={classNames('link', (className), {
                'link--blue': isBlue,
                'link--transparent': isTransparent,
                'link--green': isGreen,
                'link--white': isWhite,
            })}
            href={href}
        >
            {children}
        </a>
    )
}

export default Link;
