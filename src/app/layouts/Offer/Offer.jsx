import React, {useState} from "react";

import OfferCard from "../../components/OfferCard/OfferCard";
import Link from "../../components/Link/Link";

import commentIcon from "./assets/images/comment-icon.svg"
import calendarIcon from "./assets/images/calendar-icon.svg"
import discountIcon from "./assets/images/discount-icon.svg"

const data = [
    {
        logo: `${commentIcon}`,
        title: 'Need a hand',
        description: 'If you need any help or have questions about Devart tools or purchasing options, do not hesitate to get in touch with us',
        withList: 'withList',
    },
    {
        logo: `${calendarIcon}`,
        title: 'Get started with SQL Complete at no cost',
        description: 'Download a FREE trial version and see how much time you can save on your coding and database deployment today.',
        withLink: 'withLink',
        isBlue: 'isBlue',
        linkText: 'Download free',
    },
]

const Offer = () => {
    const [offers] = useState(data)

    return(
        <section className="offer">
            <div className="offer__container">
                <div className="offer__cards-wrap">
                    {offers.map(offer => (
                        <OfferCard
                            logo={offer.logo}
                            title={offer.title}
                            description={offer.description}
                            withList={offer.withList}
                            withLink={offer.withLink}
                            isBlue={offer.isBlue}
                            isTransparent={offer.isTransparent}
                            linkText={offer.linkText}
                        />
                    ))}
                </div>
                <div className="offer__discount">
                    <div className="offer__discount-logo">
                        <img src={discountIcon} alt="discount logo"/>
                    </div>
                    <h4 className="offer__discount-title">Buy multiple licenses with
                        a substantial discount</h4>
                    <p className="offer__discount-description">We provide flexible purchase options, including bulk discounts, to meet the budget of each and every customer.</p>
                    <div className="offer__discount-info">
                        <p className="offer__discount-price">
                            Start from:
                            <span className="offer__discount-price offer__discount-price--medium">$149.95</span>
                        </p>
                        <Link className="offer__link" href="/" isWhite>Purchase now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer;
