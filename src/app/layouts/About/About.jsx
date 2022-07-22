import React, { useState } from 'react';

import Nav from '../../components/Nav/Nav';
import NavItem from '../../components/Nav/NavItem';
import Link from '../../components/Link/Link';
import AccordionList from '../../components/Accordion/AccordionList';
import AccordionListItem from '../../components/Accordion/AccordionListItem';

import navData from './assets/navConstants';
import accordionListData from './assets/accordionListConstants';

import sqlLogo from './assets/images/sql-logo.svg';

const About = () => {
  const [nav] = useState(navData);
  const [accordionList] = useState(accordionListData);

  return (
    <section className="about">
      <header className="about__header">
        <div className="about__container">
          <a href="/" className="about__product-link">
            <img className="about__product-logo" src={sqlLogo} alt="sql logo" />
            SQL Complete
          </a>
          <Nav className="about__nav">
            {nav.map((navItem) => (
              <NavItem
                className={navItem.className}
                key={navItem.id}
                href={navItem.href}
                text={navItem.text}
              />
            ))}
          </Nav>
          <div className="about__link-wrap">
            <Link className="about__link" href="/" isBlue>
              Download
            </Link>
            <Link className="about__link" href="/" isGreen>
              Buy Now
            </Link>
          </div>
        </div>
      </header>
      <div className="about__container">
        <div className="about__content-wrap">
          <div className="about__content">
            <h2 className="about__title">
              Advanced SQL Autocompletion Pretty SQL Formatting Smart Code Refactoring
            </h2>
            <p className="about__description">
              SQL Complete is an advanced solution for SQL database development, management, and
              administration. Available as an add-in for Visual Studio and SSMS, the tool offers
              excellent autocompletion capabilities.
            </p>
            <p className="about__description">
              Write, beautify, refactor your SQL code easily and boost your productivity
              dramatically due to the features that are included in SQL Complete but are lacking in
              Management Studio and Visual Studio IntelliSense.
            </p>
            <div className="about__link-wrap">
              <Link className="about__link about__link--size-l" href="/" isBlue>
                Watch the introductory video
              </Link>
              <Link className="about__link about__link--size-m" href="/" isBordered>
                Read whitepaper
              </Link>
            </div>
          </div>
          <div className="about__content">
            <AccordionList>
              {accordionList.map((accordionListItem) => (
                <AccordionListItem
                  key={accordionListItem.id}
                  title={accordionListItem.title}
                  text={accordionListItem.text}
                />
              ))}
            </AccordionList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
