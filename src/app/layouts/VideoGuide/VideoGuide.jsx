import React, {useState} from "react";

import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/Nav/NavItem";
import Title from "../../components/Title/Title";

import videoGuideData from "./assets/videoGuideData";

const VideoGuide = () => {
    const [videoGuide] = useState(videoGuideData)

    return(
        <section className="video-guide">
            <div className="video-guide__container">
                <Title className="video-guide__title">Check out our quick video guides</Title>
                <Nav className="video-guide__nav">
                    {videoGuide.map(videoGuideItem => (
                        <NavItem className={videoGuideItem.className} href={videoGuideItem.href} text={videoGuideItem.text}/>
                    ))}
                </Nav>
                <div className="video-guide__content-wrap">
                    <div className="video-guide__content">
                        <h4 className="video-guide__heading">Boost coding productivity</h4>
                        <p className="video-guide__description">SQL Complete is designed to help the user increase their coding speed, dedicate more time to actually writing code, help them make it more understandable, and reduce the number of syntax errors.</p>
                        <p className="video-guide__description">Being an advanced SQL IntelliSense tool, SQL Complete helps most of these benefits have an immediate effect. It offers valid context-specific suggestions to speed up query writing. During typing, it conveniently leads the user through the syntax of SQL queries and commands.</p>
                        <a href="/" className="video-guide__link">
                            Learn more
                            <i className="video-guide__link-arrow" />
                        </a>
                    </div>
                    <div className="video-guide__video-wrap">
                        <iframe width="570" height="350" src="https://www.youtube.com/embed/Lif2UKzlfcQ"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoGuide;
