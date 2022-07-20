import React from 'react';

import {Accordion} from 'react-accessible-accordion';

const AccordionList = ({children}) => {
    return (
        <Accordion>
            {children}
        </Accordion>
    );
}

export default AccordionList;
