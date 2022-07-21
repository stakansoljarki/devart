import React from "react";
import classNames from "classnames";

const NavItem = ({href, text, className, withImage, alt}) => {
    return(
        <li className="nav__item">
            <a href={href} className={classNames('nav__link',(className))}>
                <span>{text}</span>
                {withImage && <img className="nav__link-icon" src={withImage} alt={alt}/>}
            </a>
        </li>
    )
}

export default NavItem;
