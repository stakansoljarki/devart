import React, {useState} from "react";

import Nav from "../Nav/Nav";
import NavItem from "../Nav/NavItem";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

import navData from "../Header/assets/constants";

const Header = () => {
    const [nav] = useState(navData)

    return(
        <header className="header">
            <div className="header__container">
                <Logo/>
                <Nav className="header__nav">
                    {nav.map(navItem => (
                        <NavItem
                            withImage={navItem.withImage}
                            src={navItem.withImage}
                            href={navItem.href}
                            alt={navItem.alt}
                            text={navItem.text}
                        />
                    ))}
                </Nav>
                <Menu />
            </div>
        </header>
    )
}

export default Header;
