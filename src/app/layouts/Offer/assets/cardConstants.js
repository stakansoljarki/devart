import commentIcon from './images/comment-icon.svg';
import calendarIcon from './images/calendar-icon.svg';

const cardData = [
  {
    id: '1',
    logo: `${commentIcon}`,
    title: 'Need a hand',
    description:
      'If you need any help or have questions about Devart tools or purchasing options, do not hesitate to get in touch with us',
    withList: 'withList',
  },
  {
    id: '2',
    logo: `${calendarIcon}`,
    title: 'Get started with SQL Complete at no cost',
    description:
      'Download a FREE trial version and see how much time you can save on your coding and database deployment today.',
    withLink: 'withLink',
    isBlue: 'isBlue',
    linkText: 'Download free',
  },
];

export default cardData;
