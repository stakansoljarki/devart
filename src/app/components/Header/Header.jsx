import React, {useState} from "react";

import Nav from "../Nav/Nav";
import NavItem from "../Nav/NavItem";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

const data = [
    {
        text: 'Products',
        href: '/',
    },
    {
        text: 'Store',
        href: '/',
    },
    {
        text: 'Support',
        href: '/',
    },
    {
        text: 'Blog',
        href: '/',
    },
    {
        text: 'Company',
        href: '/',
    }
]

const Header = () => {
    const [headerItems] = useState(data)

    return(
        <header className="header">
            <div className="header__container">
                <Logo/>
                <Nav className="header__nav">
                    {headerItems.map(headerItem => (
                        <NavItem href={headerItem.href} text={headerItem.text}/>
                    ))}
                </Nav>
                <Menu />
            </div>
        </header>
    )
}

export default Header;
