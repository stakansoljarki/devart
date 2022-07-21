import soft from './images/soft.svg';
import data from './images/data.svg';
import dataAdmin from './images/data-admin.svg';
import dataAnalysis from './images/data-analysis.svg';
import devops from './images/devops.svg';

const navData = [
  {
    className: 'nav__link--border-bottom',
    id: '1',
    text: 'Software developers',
    href: '/',
    withImage: `${soft}`,
  },
  {
    id: '2',
    text: 'Database developers',
    href: '/',
    withImage: `${data}`,
  },
  {
    id: '3',
    text: 'Database administrators',
    href: '/',
    withImage: `${dataAdmin}`,
  },
  {
    id: '4',
    text: 'Data analysis',
    href: '/',
    withImage: `${dataAnalysis}`,
  },
  {
    id: '5',
    text: 'Devops engineers',
    href: '/',
    withImage: `${devops}`,
  },
];

export default navData;
