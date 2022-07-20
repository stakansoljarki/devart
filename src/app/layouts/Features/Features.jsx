import React, {useState} from "react";

import Title from "../../components/Title/Title";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/Nav/NavItem";

import featureImage from "./assets/images/codestyle.svg";

const data = [
    {
        text: 'Collapsed',
        href: '/',
    },
    {
        text: 'Commas before',
        href: '/',
        className: 'nav__link--border-left',
    },
    {
        text: 'Compact',
        href: '/',
    },
    {
        text: 'Default',
        href: '/',
    },
    {
        text: 'Extended',
        href: '/',
    },
    {
        text: 'Indented',
        href: '/',
    },
    {
        text: 'MSDN SQL',
        href: '/',
    },
    {
        text: 'Right aligned',
        href: '/',
    },
    {
        text: 'Stack compact',
        href: '/',
    }
]

const Features = () => {
    const [featureItems] = useState(data)

    return(
        <section className="features">
            <div className="features__container">
                <Title className="features__title">Unveil differences between formatting of predefined styles</Title>
                <div className="features__content-wrap">
                    <div className="feature__nav-wrap">
                        <h4 className="features__heading">Formatting profiles</h4>
                        <Nav className="features__nav">
                            {featureItems.map(featureItem => (
                                <NavItem className={featureItem.className} href={featureItem.href} text={featureItem.text}/>
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
