import firstBackground from './images/1img.jpg';
import secondBackground from './images/2img.jpg';
import thirdBackground from './images/3img.jpg';
import mscLogo from './images/msc-group-logo.svg';
import hnuLogo from './images/hnu-logo.svg';
import elementsLogo from './images/elements-fin-logo.svg';
import studioLogo from './images/studio-logo.svg';
import sqlLogo from './images/sql-logo.svg';

const articleCardData = [
  {
    id: '1',
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
    id: '2',
    imgSrc: `${secondBackground}`,
    logoSrc: `${hnuLogo}`,
    logoAlt: 'Nordhausen University logo',
    title: 'Nordhausen University',
    description:
      '"...we found out that it is a perfect tool for us due to its simplicity, usability, cost-effectiveness..."',
    linkHref: '/',
    linkSrc: `${studioLogo}`,
    linkText: 'dbForge Studio for SQL Server',
  },
  {
    id: '3',
    imgSrc: `${thirdBackground}`,
    logoSrc: `${elementsLogo}`,
    logoAlt: 'Elements Financial logo',
    title: 'Elements Financial',
    description: '"...this add-in has greatly improved our day to day code writing abilities..."',
    linkHref: '/',
    linkSrc: `${sqlLogo}`,
    linkText: 'dbForge SQL Complete',
  },
];

export default articleCardData;
