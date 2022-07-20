import React from "react";
import Link from "../../components/Link/Link";

import commentIcon from "./assets/images/comment-icon.svg"
import calendarIcon from "./assets/images/calendar-icon.svg"
import doneIcon from "./assets/images/done-icon.svg"
import messageIcon from "./assets/images/message-icon.svg"
import discountIcon from "./assets/images/discount-icon.svg"

const Offer = () => {
    return(
        <section className="offer">
            <div className="offer__container">
                <div className="offer__cards-wrap">
                    <div className="offer__card">
                        <div className="offer__card-logo-wrap">
                            <img className="offer__card-logo" src={commentIcon} alt="message logo"/>
                        </div>
                        <div className="offer__card-info">
                            <h4 className="offer__card-title">Need a hand?</h4>
                            <p className="offer__card-description">If you need any help or have questions about Devart tools or purchasing options, do not hesitate to get in touch with us.</p>
                            <ul className="offer__card-list">
                                <li className="offer__card-item">
                                    <a className="offer__card-link" href="/">
                                        <img className="offer__card-icon" src={doneIcon} alt="logo"/>
                                        <span>Purchasing FAQ</span>
                                    </a>
                                </li>
                                <li className="offer__card-item">
                                    <a className="offer__card-link" href="/">
                                        <img className="offer__card-icon" src={messageIcon} alt="logo"/>
                                        <span>sales@devart.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="offer__card">
                        <div className="offer__card-logo">
                            <img src={calendarIcon} alt="message logo"/>
                        </div>
                        <div className="offer__card-info">
                            <h4 className="offer__card-title">Get started with SQL Complete at no cost</h4>
                            <p className="offer__card-description">Download a FREE trial version and see how much time you can save on your coding and database deployment today.</p>
                            <Link href="/" className="offer__link" isBlue>Download free</Link>
                        </div>
                    </div>
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
