import React, {useState} from "react";
import Title from "../../components/Title/Title";

import microsoftLogo from "./assets/images/microsoft.svg"
import arconicLogo from "./assets/images/arconic.svg"
import anthemLogo from "./assets/images/anthem.svg"
import polarisLogo from "./assets/images/polaris.svg"
import lamResearchLogo from "./assets/images/lam-research.svg"
import hpLogo from "./assets/images/HP-enterprise.svg"
import jpLogo from "./assets/images/JP-morgan.svg"
import jabilLogo from "./assets/images/jabil.svg"
import berkleyLogo from "./assets/images/berkley.svg"
import aBergenLogo from "./assets/images/a-bergen.svg"

const data = [
    {
        src: `${microsoftLogo}`,
        alt: 'Microsoft logo',
    },
    {
        src: `${arconicLogo}`,
        alt: 'Arconic logo',
    },
    {
        src: `${anthemLogo}`,
        alt: 'Anthem logo',
    },
    {
        src: `${polarisLogo}`,
        alt: 'Polaris logo',
    },
    {
        src: `${lamResearchLogo}`,
        alt: 'Lav Research logo',
    },
    {
        src: `${hpLogo}`,
        alt: 'Hewlett Packard Enterprise logo',
    },
    {
        src: `${jpLogo}`,
        alt: 'J.P.Morgan logo',
    },
    {
        src: `${jabilLogo}`,
        alt: 'Jabil logo',
    },
    {
        src: `${berkleyLogo}`,
        alt: 'Berkley logo',
    },
    {
        src: `${aBergenLogo}`,
        alt: 'AmerisourceBergen logo',
    }
]

const Clients = () => {
    const [clientsCards] = useState(data)

    return(
        <section className="clients">
            <div className="clients__container">
                <Title className="clients__title">Leading companies choose dbForge Products</Title>
                <div className="clients__cards-wrap">
                    {clientsCards.map(clientsCard => (
                        <div className="clients__card">
                            <img src={clientsCard.src} alt={clientsCard.alt} className="clients__logo"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients;
