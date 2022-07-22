import React from 'react';
import { string } from 'prop-types';
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const AccordionListItem = ({ title, text }) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton>{title}</AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>{text}</p>
    </AccordionItemPanel>
  </AccordionItem>
);

export default AccordionListItem;

AccordionListItem.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
};
