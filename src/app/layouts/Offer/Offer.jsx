import React, {useState} from "react";

import OfferCard from "../../components/OfferCard/OfferCard";
import Link from "../../components/Link/Link";

import cardData from "./assets/cardConstants";

import discountIcon from "./assets/images/discount-icon.svg"


const Offer = () => {
    const [cards] = useState(cardData)

    return(
        <section className="offer">
            <div className="offer__container">
                <div className="offer__cards-wrap">
                    {cards.map(card => (
                        <OfferCard
                            logo={card.logo}
                            title={card.title}
                            description={card.description}
                            withList={card.withList}
                            withLink={card.withLink}
                            isBlue={card.isBlue}
                            isTransparent={card.isTransparent}
                            linkText={card.linkText}
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
