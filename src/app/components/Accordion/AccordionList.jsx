import React from 'react';
import { node } from 'prop-types';

import { Accordion } from 'react-accessible-accordion';

const AccordionList = ({ children }) => <Accordion>{children}</Accordion>;

export default AccordionList;

AccordionList.propTypes = {
  children: node.isRequired,
};
