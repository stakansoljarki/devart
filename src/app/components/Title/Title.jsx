import React from "react";
import classNames from "classnames";

const Title = ({className, isWhite, children}) => {
    return(
        <h3
            className={classNames('title', (className), {
            'title--white': isWhite,
            })}
        >
            {children}
        </h3>
    )
}

export default Title;
