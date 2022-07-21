import soft from "./images/soft.svg"
import data from "./images/data.svg"
import dataAdmin from "./images/data-admin.svg"
import dataAnalysis from "./images/data-analysis.svg"
import devops from "./images/devops.svg"

const navData = [
    {
        className: 'nav__link--border-bottom',
        text: 'Software developers',
        href: '/',
        withImage: `${soft}`,
    },
    {
        text: 'Database developers',
        href: '/',
        withImage: `${data}`,
    },
    {
        text: 'Database administrators',
        href: '/',
        withImage: `${dataAdmin}`,
    },
    {
        text: 'Data analysis',
        href: '/',
        withImage: `${dataAnalysis}`,
    },
    {
        text: 'Devops engineers',
        href: '/',
        withImage: `${devops}`,
    },
]

export default navData;
