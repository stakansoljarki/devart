import discountIcon from './images/discount.svg';
import calendarIcon from './images/calendar.svg';
import commentIcon from './images/comment.svg';

const offerCardData = [
  {
    id: '1',
    className: 'plans__offer-card offer-card--secondary',
    logo: `${discountIcon}`,
    title: 'Get started with SQL Complete at no cost',
    description:
      'Download a FREE trial version and see how much time you can save on your coding and database deployment today.',
    withLink: 'true',
    isTransparent: 'true',
    linkText: 'Download free',
  },
  {
    id: '2',
    className: 'plans__offer-card offer-card--secondary',
    logo: `${calendarIcon}`,
    title: 'Get started with SQL Complete at no cost',
    description:
      'Download a FREE trial version and see how much time you can save on your coding and database deployment today.',
    withLink: 'true',
    isBlue: 'isBlue',
    linkText: 'Download free',
  },
  {
    id: '3',
    className: 'plans__offer-card offer-card--secondary',
    logo: `${commentIcon}`,
    title: 'Need a hand',
    description:
      'If you need any help or have questions about Devart tools or purchasing options, do not hesitate to get in touch with us',
    withList: 'withList',
  },
];

export default offerCardData;
