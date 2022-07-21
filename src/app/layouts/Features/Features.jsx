import React, {useState} from "react";

import Title from "../../components/Title/Title";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/Nav/NavItem";

import featureImage from "./assets/images/codestyle.svg";

import navData from "./assets/navConstants";

const Features = () => {
    const [navItems] = useState(navData)

    return(
        <section className="features">
            <div className="features__container">
                <Title className="features__title">Unveil differences between formatting of predefined styles</Title>
                <div className="features__content-wrap">
                    <div className="feature__nav-wrap">
                        <h4 className="features__heading">Formatting profiles</h4>
                        <Nav className="features__nav">
                            {navItems.map(navItem => (
                                <NavItem className={navItem.className} href={navItem.href} text={navItem.text}/>
                            ))}
                        </Nav>
                    </div>
                    <div className="features__content">
                        <div className="features__img-wrap">
                            <img src={featureImage} alt="code style"/>
                        </div>
                        <div className="features__buttons-wrap">
                            <button className="features__button features__button--active">After formatting</button>
                            <button className="features__button">Before formatting</button>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/" className="features__link">
                View all features
                <i className="features__link-icon" />
            </a>
        </section>
    )
}

export default Features;
