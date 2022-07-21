import React from "react";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";

import microsoftLogo from "./assets/images/microsoft.svg";
import oracleLogo from "./assets/images/oracle.svg";
import embarcaderoLogo from "./assets/images/embarcadero.svg";
import visualLogo from "./assets/images/visual-studio.svg";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__info">
                        <Logo />
                        <p className="footer__description">Founded in 1997, Devart is currently one of the leading developers of database management software, ALM solutions and data providers for most popular database servers.</p>
                        <div className="footer__socials-wrap">
                            <Socials />
                        </div>
                    </div>
                    <div className="footer__list">
                        <h4 className="footer__title">Products</h4>
                        <div className="footer__nav-wrap">
                            <ul className="footer__nav">
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">SQL Server Tools</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">MySQL Tools</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Oracle Tools</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">PostgreSQL Tools</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Productivity Tools</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Skyvia</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Discontinued Products</a>
                                </li>
                            </ul>
                            <ul className="footer__nav">
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">ADO.NET Data Providers</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">ORM Solutions</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">ODBC Drivers</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">SSIS Components</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Excel Add-ins</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Delphi Data Access Components</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">dbExpress Drivers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__list">
                        <h4 className="footer__title">Support</h4>
                        <div className="footer__nav-wrap">
                            <ul className="footer__nav">
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Submit Request</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">View Forums</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Documentation Center</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Ordering FAQs</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Discount Programs</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Using Website</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__list">
                        <h4 className="footer__title">Company</h4>
                        <div className="footer__nav-wrap">
                            <ul className="footer__nav">
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">About Us</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Archive News</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Contacts</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Contact Us</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Success Stories</a>
                                </li>
                            </ul>
                            <ul className="footer__nav">
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Events</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Customers</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Partners</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="/" className="footer__nav-link">Resellers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__partners">
                    <div className="footer__partner">
                        <img src={microsoftLogo} alt="Microsoft Partner logo" className="footer__partner-logo"/>
                    </div>
                    <div className="footer__partner">
                        <img src={oracleLogo} alt="Oracle Partner logo" className="footer__partner-logo"/>
                    </div>
                    <div className="footer__partner">
                        <img src={embarcaderoLogo} alt="Embarcadero Partner logo" className="footer__partner-logo"/>
                    </div>
                    <div className="footer__partner">
                        <img src={visualLogo} alt="Visual Studio Partner logo" className="footer__partner-logo"/>
                    </div>
                </div>
                <div className="footer__other">
                    <p className="footer__copyrights">© 1997 - 2019 Devart. All rights reserved.</p>
                    <div className="footer__links-wrap">
                        <a href="/" className="footer__link">Privacy & Security</a>
                        <a href="/" className="footer__link">Terms of Use</a>
                    </div>
                    <button className="footer__button">
                        Back on Top
                        <i className="footer__button-icon" />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
