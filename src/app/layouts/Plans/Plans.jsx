import React, {useState} from "react";

import Title from "../../components/Title/Title";
import OfferCard from "../../components/OfferCard/OfferCard";

import offerCardData from "./assets/offerCardConstants";

const Plans = () => {
    const [offerCards] = useState(offerCardData)

    return(
        <section className="plans">
            <div className="plans__container">
                <Title className="plans__title">Ready to go?</Title>
                <div className="plans__cards-wrap">
                    {offerCards.map(offerCard => (
                        <OfferCard
                            className={offerCard.className}
                            logo={offerCard.logo}
                            title={offerCard.title}
                            description={offerCard.description}
                            withList={offerCard.withList}
                            withLink={offerCard.withLink}
                            isBlue={offerCard.isBlue}
                            isTransparent={offerCard.isTransparent}
                            linkText={offerCard.linkText}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Plans;
