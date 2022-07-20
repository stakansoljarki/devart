import React from "react";
import classNames from "classnames";

const NavItem = ({href, text, className}) => {
    return(
        <li className="nav__item">
            <a href={href} className={classNames('nav__link',(className))}>{text}</a>
        </li>
    )
}

export default NavItem;
