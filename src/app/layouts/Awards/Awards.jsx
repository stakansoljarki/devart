import React, {useState} from "react";
import Title from "../../components/Title/Title";

import bestDatabaseLogo from "./assets/images/best-database.svg";
import highPerformerSpringLogo from "./assets/images/high-performer-spring.svg";
import highPerformerSummerLogo from "./assets/images/high-performer-summer.svg";
import softAdviceLogo from "./assets/images/soft-advice.svg";

const data = [
    {
        src: `${bestDatabaseLogo}`,
        alt: 'Best Database Backup Solution 2021 award logo',
        name: 'DBTA Best Database Backup Solution 2021',
    },
    {
        src: `${highPerformerSpringLogo}`,
        alt: 'High Performer Summer 2021 award logo',
        name: `High Performer Summer 2021`,
    },
    {
        src: `${highPerformerSummerLogo}`,
        alt: 'High Performer Spring 2020 award logo',
        name: 'High Performer Spring 2020',
    },
    {
        src: `${softAdviceLogo}`,
        alt: 'Software Advice Front Runners 2021 award logo',
        name: 'Software Advice Front Runners 2021',
    }
]

const Awards = () => {
    const [clientsCards] = useState(data)

    return(
        <section className="awards">
            <div className="awards__container">
                <Title className="awards__title" isWhite>Awards & Recognition</Title>
                <p className="awards__description">dbForge solutions have been consistently recognized for quality, reliability, and practical value delivered under sleek user interfaces</p>
                <div className="awards__cards-wrap">
                    {clientsCards.map(awardsCard => (
                        <div className="awards__card">
                            <div className="awards__card-img-wrap">
                                <img src={awardsCard.src} alt={awardsCard.alt} className="awards__img"/>
                            </div>
                            <p className="awards__card-name">{awardsCard.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Awards;
