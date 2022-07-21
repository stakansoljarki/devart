import React from "react";
import FacebookIcon from "../Svg/FacebookIcon";
import TwitterIcon from "../Svg/TwitterIcon";
import LinkedinIcon from "../Svg/LinkedinIcon";
import YoutubeIcon from "../Svg/YoutubeIcon";
import InstagramIcon from "../Svg/InstagramIcon";

const Socials = () => {
    return(
        <ul className="socials">
            <li className="socials__item">
                <a href="https://www.facebook.com/DevartSoftware" rel="noreferrer" target="_blank" className="socials__link">
                    <FacebookIcon />
                </a>
            </li>
            <li className="socials__item">
                <a href="https://twitter.com/DevartSoftware" rel="noreferrer" target="_blank" className="socials__link">
                    <TwitterIcon />
                </a>
            </li>
            <li className="socials__item">
                <a href="https://www.linkedin.com/company/devart" rel="noreferrer" target="_blank" className="socials__link">
                    <LinkedinIcon />
                </a>
            </li>
            <li className="socials__item">
                <a href="https://www.youtube.com/user/DevartSoftware" rel="noreferrer" target="_blank" className="socials__link">
                    <YoutubeIcon />
                </a>
            </li>
            <li className="socials__item">
                <a href="https://www.instagram.com/devart.software" rel="noreferrer" target="_blank" className="socials__link">
                    <InstagramIcon />
                </a>
            </li>
        </ul>
    )
}

export default Socials;
