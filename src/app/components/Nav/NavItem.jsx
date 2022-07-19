import React from "react";

const NavItem = ({href, text}) => {
    return(
        <li>
            <a href={href} className="nav__link">{text}</a>
        </li>
    )
}

export default NavItem;
