import React from "react";
import Title from "../../components/Title/Title";

import formIcon from "./assets/images/form-icon.svg"
import emailIcon from "./assets/images/email-icon.svg"
import tagIcon from "./assets/images/tag-icon.svg"
import discArrowIcon from "./assets/images/arrow-right.svg"
import leftIcon from "./assets/images/left.svg" // used this picture because the right and left images were the wrong size in the layout
import centerIcon from "./assets/images/Center.svg"

const Discount = () => {
    return(
        <section className="discount">
            <div className="discount__container">
                <Title className="discount__title">How to get discount on dbForge SQL Tools</Title>
                <div className="discount__steps-wrap">
                    <div className="discount__step">
                        <div className="discount__step-img-wrap">
                            <img className="discount__step-img" src={formIcon} alt="form icon"/>
                        </div>
                        <p className="discount__step-title">Step 1</p>
                        <p className="discount__step-description">Fill a form</p>
                    </div>
                    <div className="discount__arrow-wrap">
                        <img src={discArrowIcon} alt="" className="discount__arrow"/>
                    </div>
                    <div className="discount__step">
                        <div className="discount__step-img-wrap">
                            <img className="discount__step-img" src={emailIcon} alt="email icon"/>
                        </div>
                        <p className="discount__step-title">Step 2</p>
                        <p className="discount__step-description">Wait for reply</p>
                    </div>
                    <div className="discount__arrow-wrap">
                        <img src={discArrowIcon} alt="" className="discount__arrow"/>
                    </div>
                    <div className="discount__step">
                        <div className="discount__step-img-wrap">
                            <img className="discount__step-img" src={tagIcon} alt="tag icon"/>
                        </div>
                        <p className="discount__step-title">Step 3</p>
                        <p className="discount__step-description">Get discount</p>
                    </div>
                </div>
                <div className="discount__info">
                    <a className="discount__link" href="/">
                        <img src={leftIcon} alt="" className="discount__link-img"/>
                    </a>
                    <a className="discount__link discount__link--big" href="/">
                        <img src={centerIcon} alt="" className="discount__link-img"/>
                    </a>
                    <a className="discount__link" href="/">
                        <img src={leftIcon} alt="" className="discount__link-img"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Discount;
