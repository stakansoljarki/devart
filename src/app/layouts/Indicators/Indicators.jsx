import React, {useState} from "react";

import Title from "../../components/Title/Title";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/Nav/NavItem";

const data = [
    {
        text: 'Software developers',
        href: '/',
        className: 'nav__link--border-bottom',
    },
    {
        text: 'Database developers',
        href: '/',
    },
    {
        text: 'Database administrators',
        href: '/',
    },
    {
        text: 'Data analysis',
        href: '/',
    },
    {
        text: 'Devops engineers',
        href: '/',
    },
]

const Indicators = () => {
    const [indicatorsItems] = useState(data)

    return(
        <section className="indicators">
            <div className="indicators__container">
                <Title className="indicators__title" isWhite>See How SQL Complete Unlocks Value</Title>
                <Nav className="indicators__nav">
                    {indicatorsItems.map(indicatorsItem => (
                        <NavItem className={indicatorsItem.className} href={indicatorsItem.href} text={indicatorsItem.text}/>
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
