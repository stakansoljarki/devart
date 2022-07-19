import React from "react";
import logo from "../../../assets/images/logo.svg";

const Logo = () => {
    return(
        <a href="/" className="logo">
            <img
                className=""
                src={logo}
                alt="logo"
            />
        </a>
    )
}

export default Logo;
