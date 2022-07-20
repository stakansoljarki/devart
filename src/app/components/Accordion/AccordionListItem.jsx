import React from "react";
import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";

const AccordionListItem = ({title, text}) => {
    return(
        <div>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        {text}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </div>
    )
}

export default AccordionListItem;
