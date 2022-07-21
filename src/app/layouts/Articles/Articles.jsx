import React, {useState} from "react";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

import firstBackground from "./assets/images/1img.jpg";
import secondBackground from "./assets/images/2img.jpg";
import thirdBackground from "./assets/images/3img.jpg";
import mscLogo from "./assets/images/msc-group-logo.svg";
import hnuLogo from "./assets/images/hnu-logo.svg";
import elementsLogo from "./assets/images/elements-fin-logo.svg";
import studioLogo from "./assets/images/studio-logo.svg";
import sqlLogo from "./assets/images/sql-logo.svg";

const data = [
    {
        imgSrc: `${firstBackground}`,
        logoSrc: `${mscLogo}`,
        logoAlt: 'MSC group logo',
        title: 'MCS GROUP',
        description: '"...a powerful tool for developing a help system with auto format support..."',
        linkHref: '/',
        linkSrc: `${studioLogo}`,
        linkText: 'dbForge Studio for SQL Server',
    },
    {
        imgSrc: `${secondBackground}`,
        logoSrc: `${hnuLogo}`,
        logoAlt: 'Nordhausen University logo',
        title: 'Nordhausen University',
        description: '"...we found out that it is a perfect tool for us due to its simplicity, usability, cost-effectiveness..."',
        linkHref: '/',
        linkSrc: `${studioLogo}`,
        linkText: 'dbForge Studio for SQL Server',
    },
    {
        imgSrc: `${thirdBackground}`,
        logoSrc: `${elementsLogo}`,
        logoAlt: 'Elements Financial logo',
        title: 'Elements Financial',
        description: '"...this add-in has greatly improved our day to day code writing abilities..."',
        linkHref: '/',
        linkSrc: `${sqlLogo}`,
        linkText: 'dbForge SQL Complete',
    }
]

const Articles = () => {
    const [articlesArr] = useState(data)

    return(
        <section className="articles">
            <div className="articles__container">
                <header className="articles__header">
                    <Title>Success Stories</Title>
                    <Pagination />
                </header>
                <div className="articles__content">
                    {articlesArr.map(article => (
                        <ArticleCard
                            imgSrc={article.imgSrc}
                            imgAlt={article.imgAlt}
                            logoSrc={article.logoSrc}
                            logoAlt={article.logoAlt}
                            title={article.title}
                            description={article.description}
                            linkHref={article.linkHref}
                            linkSrc={article.linkSrc}
                            linkText={article.linkText}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Articles;
