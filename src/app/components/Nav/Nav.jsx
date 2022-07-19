import React from "react";
import classNames from "classnames";

const Nav = ({className, children}) => {
    return(
        <nav className={classNames('nav',(className))}>
            <ul className="nav__list">
                {children}
            </ul>
        </nav>
    )
}

export default Nav;
