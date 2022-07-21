import React, {useState} from "react";

import Title from "../../components/Title/Title";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/Nav/NavItem";

import navData from "./assets/navConstants";

const Indicators = () => {
    const [nav] = useState(navData)

    return(
        <section className="indicators">
            <div className="indicators__container">
                <Title className="indicators__title" isWhite>See How SQL Complete Unlocks Value</Title>
                <Nav className="indicators__nav">
                    {nav.map(navItem => (
                        <NavItem withImage={navItem.withImage} alt="logo" className={navItem.className} href={navItem.href} text={navItem.text}/>
                    ))}
                </Nav>
                <div className="indicators__cards">
                    <div className="indicators__card">
                        <h4 className="indicators__card-title">2x</h4>
                        <p className="indicators__card-subtitle">Level Up Query coding</p>
                        <p className="indicators__card-description">Code faster with contexr-sensitive auto-completion, quick object information, instant code formatting, and smart refactoring Boost your productivity significantly with</p>
                    </div>
                    <div className="indicators__card">
                        <h4 className="indicators__card-title">100%</h4>
                        <p className="indicators__card-subtitle">Level Up your productivity </p>
                        <p className="indicators__card-description">Code faster with contexr-sensitive auto-completion, quick object information, instant code formatting, and smart refactoring Boost your productivity significantly</p>
                    </div>
                    <div className="indicators__card">
                        <h4 className="indicators__card-title">20-50</h4>
                        <p className="indicators__card-subtitle">Level Up Query coding</p>
                        <p className="indicators__card-description">Code faster with contexr-sensitive auto-completion, quick object information, instant code formatting, and smart refactoring Boost your productivity significantly</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Indicators;
