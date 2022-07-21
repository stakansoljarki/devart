import React, {useState} from "react";

import Title from "../../components/Title/Title";
import OfferCard from "../../components/OfferCard/OfferCard";

import discountIcon from "./assets/images/discount.svg"
import calendarIcon from "./assets/images/calendar.svg"
import commentIcon from "./assets/images/comment.svg"

const data = [
    {
        className: 'plans__offer-card offer-card--secondary',
        logo: `${discountIcon}`,
        title: 'Get started with SQL Complete at no cost',
        description: 'Download a FREE trial version and see how much time you can save on your coding and database deployment today.',
        withLink: 'withLink',
        isTransparent: 'isTransparent',
        linkText: 'Download free',
    },
    {
        className: 'plans__offer-card offer-card--secondary',
        logo: `${calendarIcon}`,
        title: 'Get started with SQL Complete at no cost',
        description: 'Download a FREE trial version and see how much time you can save on your coding and database deployment today.',
        withLink: 'withLink',
        isBlue: 'isBlue',
        linkText: 'Download free',
    },
    {
        className: 'plans__offer-card offer-card--secondary',
        logo: `${commentIcon}`,
        title: 'Need a hand',
        description: 'If you need any help or have questions about Devart tools or purchasing options, do not hesitate to get in touch with us',
        withList: 'withList',
    },
]

const Plans = () => {
    const [plans] = useState(data)

    return(
        <section className="plans">
            <div className="plans__container">
                <Title className="plans__title">Ready to go?</Title>
                <div className="plans__cards-wrap">
                    {plans.map(plan => (
                        <OfferCard
                            className={plan.className}
                            logo={plan.logo}
                            title={plan.title}
                            description={plan.description}
                            withList={plan.withList}
                            withLink={plan.withLink}
                            isBlue={plan.isBlue}
                            isTransparent={plan.isTransparent}
                            linkText={plan.linkText}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Plans;
