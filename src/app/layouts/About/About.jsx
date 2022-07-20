import React, {useState} from "react";
import sqlLogo from "./assets/images/sql-logo.svg"
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/Nav/NavItem";
import Link from "../../components/Link/Link";
import AccordionList from "../../components/Accordion/AccordionList";
import AccordionListItem from "../../components/Accordion/AccordionListItem";

const data = [
    {
        text: 'Overview',
        href: '/',
        className: 'nav__link--border-bottom',
    },
    {
        text: 'What\'s New',
        href: '/',
    },
    {
        text: 'Features',
        href: '/',
    },
    {
        text: 'Editions',
        href: '/',
    },
    {
        text: 'Support',
        href: '/',
    }
]

const accordionListData = [
    {
        title: 'Express edition available',
        text: 'SQL Complete conveniently delivers quick object overview tooltips by simply hovering over the required objects while you are writing SQL code. This feature supports nearly 70 types of database objects.',
    },
    {
        title: 'Beautify T-SQL code and unify code standards with smart SQL Formatter',
        text: 'SQL Complete conveniently delivers quick object overview tooltips by simply hovering over the required objects while you are writing SQL code. This feature supports nearly 70 types of database objects.',
    },
    {
        title: 'Get the essential information on DB objects while you are writing a code',
        text: 'SQL Complete conveniently delivers quick object overview tooltips by simply hovering over the required objects while you are writing SQL code. This feature supports nearly 70 types of database objects.',
    },
    {
        title: 'Format your SQL query right in Management Studio or Visual Studio',
        text: 'SQL Complete conveniently delivers quick object overview tooltips by simply hovering over the required objects while you are writing SQL code. This feature supports nearly 70 types of database objects.',
    },
    {
        title: 'Use rich SQL code snippet collection, manage and modify the existing snippets or create your own templates',
        text: 'SQL Complete conveniently delivers quick object overview tooltips by simply hovering over the required objects while you are writing SQL code. This feature supports nearly 70 types of database objects.',
    },
    {
        title: 'Format your SQL query right in Management Studio or Visual Studio',
        text: 'SQL Complete conveniently delivers quick object overview tooltips by simply hovering over the required objects while you are writing SQL code. This feature supports nearly 70 types of database objects.',
    },
    {
        title: 'Rename tables, columns, procedures, and functions safely with automatic correction of references to the renamed objects',
        text: 'SQL Complete conveniently delivers quick object overview tooltips by simply hovering over the required objects while you are writing SQL code. This feature supports nearly 70 types of database objects.',
    },

]

const About = () => {
    const [aboutItems] = useState(data)
    const [accordionList] = useState(accordionListData)

    return(
        <section className="about">
            <header className="about__header">
                <div className="about__container">
                    <a href="/" className="about__product-link">
                        <img className="about__product-logo" src={sqlLogo} alt="sql logo"/>
                        SQL Complete
                    </a>
                    <Nav className="about__nav">
                        {aboutItems.map(aboutItem => (
                            <NavItem className={aboutItem.className} href={aboutItem.href} text={aboutItem.text}/>
                        ))}
                    </Nav>
                    <div className="about__link-wrap">
                        <Link
                            className="about__link"
                            href="/"
                            isBlue
                        >
                            Download
                        </Link>
                        <Link
                            className="about__link"
                            href="/"
                            isGreen
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </header>
            <div className="about__container">
                <div className="about__content-wrap">
                    <div className="about__content">
                        <h2 className="about__title">Advanced SQL Autocompletion Pretty SQL Formatting
                            Smart Code Refactoring</h2>
                        <p className="about__description">SQL Complete is an advanced solution for SQL database development, management, and administration. Available as an add-in for Visual Studio and SSMS, the tool offers excellent autocompletion capabilities.</p>
                        <p className="about__description">Write, beautify, refactor your SQL code easily and boost your productivity dramatically due to the features that are included in SQL Complete but are lacking in Management Studio and Visual Studio IntelliSense.</p>
                        <div className="about__link-wrap">
                            <Link
                                className="about__link about__link--size-l"
                                href="/"
                                isBlue
                            >
                                Watch the introductory video
                            </Link>
                            <Link
                                className="about__link about__link--size-m"
                                href="/"
                                isBordered
                            >
                                Read whitepaper
                            </Link>
                        </div>
                    </div>
                    <div className="about__content">
                        <AccordionList>
                            {accordionList.map(accordionListItem => (
                                <AccordionListItem title={accordionListItem.title} text={accordionListItem.text}/>
                            ))}
                        </AccordionList>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
