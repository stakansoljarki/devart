import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import ShoppingCartIcon from "../Svg/ShoppingCartIcon";
import ArrowIcon from "../Svg/ArrowIcon";
import UserInfo from "../UserInfo/UserInfo";

const Menu = () => {
    return(
        <div className="menu">
            <SearchForm />
            <a
                className="menu__shopping-cart-button"
                href="/"
            >
                <ShoppingCartIcon className="menu__shopping-cart-icon" />
            </a>
            <button
                className="menu__language-button"
                type="button"
            >
                En
                <ArrowIcon className="menu__language-button-icon"/>
            </button>
            <UserInfo />
        </div>
    )
}

export default Menu;
